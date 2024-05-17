import { router } from '@/router';
import { clone, isUndefined, orderBy } from 'xe-utils';
import { RouteRecordRaw } from 'vue-router';
import { usePermissionStore } from '@/store/modules/permission';
import { buildHierarchyTree, flatTreeToArray } from '@/utils/tree';

const Layout = () => import('@/layouts/index.vue');
const IFrameView = () => import('@/layouts/iframeView.vue');
// 导入views 下的所有 vue 或 tsx
const modulesRoutes = import.meta.glob('/src/views/**/*.{vue,tsx}');

/**
 * 对最外层路由进行过滤
 * @param routes 路由
 */
function outerSortAsc(routes: any[]) {
	// routes.forEach((el, index) => {
	// 	if (isUndefined(el.meta.sort)) {
	// 		el.meta.sort = index + 2;
	// 	}
	// });
	return orderBy(routes, [[(item: any) => item.meta.sort, 'asc']]);
}

/**
 * 过滤meta中hidden为true的菜单
 * @param data 路由数据
 * @returns 返回去除hidden:true的路由对象数组
 */
function filterHiddenTree(data: RouteRecordRaw[]) {
	const newTree = clone(data).filter((v) => !v.meta?.hidden);
	newTree.forEach((v) => v.children && (v.children = filterHiddenTree(v.children)));
	return newTree;
}

/**
 * 一维数组处理成多级嵌套数组（三级及以上的路由全部扁平为二级，keep-alive 只支持到二级缓存）
 * @param routesList 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成规定路由的格式
 */
function formatTwoStageRoutes(routesList: RouteRecordRaw[]) {
	if (routesList.length === 0) return routesList;
	const newRoutesList: RouteRecordRaw[] = [];
	const newChildrenList: RouteRecordRaw[] = [];
	routesList.forEach((v: RouteRecordRaw) => {
		if (v.path === '/') {
			newRoutesList.unshift({
				component: v.component,
				name: v.name,
				path: v.path,
				redirect: v.redirect,
				meta: v.meta,
				children: []
			});
		} else {
			newChildrenList.push({ ...v });
		}
	});
	newRoutesList[0].children = newChildrenList;
	return newRoutesList;
}

/**
 * 通过指定 `key` 获取父级路径集合，默认 `key` 为 `path`
 * @param value 路由path
 * @param routes 路由数据
 * @param key
 */
function getParentPaths(value: string, routes: RouteRecordRaw[], key: keyof RouteRecordRaw = 'path') {
	// 深度遍历查找
	function dfs(routes: RouteRecordRaw[], value: string, parents: string[]) {
		for (let i = 0; i < routes.length; i++) {
			const item = routes[i];
			// 返回父级path
			if (item[key] === value) return parents;
			// children不存在或为空则不递归
			if (!item.children || !item.children.length) continue;
			// 往下查找时将当前path入栈
			parents.push(item.path);

			if (dfs(item.children, value, parents).length) return parents;
			// 深度遍历查找未找到时当前path 出栈
			parents.pop();
		}
		// 未找到时返回空数组
		return [];
	}

	return dfs(routes, value, []);
}

/**
 * 查找对应 `path` 的路由信息
 * @param path
 * @param routes
 */
function findRouteByPath(path: string, routes: RouteRecordRaw[]): RouteRecordRaw | undefined {
	let res = routes.find((item: { path: string }) => item.path == path);
	if (res) {
		return isProxy(res) ? toRaw(res) : res;
	} else {
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].children instanceof Array && routes[i].children!.length > 0) {
				res = findRouteByPath(path, routes[i].children!);
				if (res) {
					return isProxy(res) ? toRaw(res) : res;
				}
			}
		}
		return undefined;
	}
}

/**
 * 解析组件
 * @param component
 */
function resolveView(component: any) {
	let reg = /\..\/..\/views\/|.vue/g;
	const path = Object.keys(modulesRoutes).find((key) => key.replaceAll(reg, '') === component) as string;
	return modulesRoutes[path];
}

/**
 * 添加匹配路由
 */
function addPathMatch() {
	if (!router.hasRoute('pathMatch')) {
		router.addRoute({
			path: '/:pathMatch(.*)',
			name: 'pathMatch',
			redirect: '/error/404'
		});
	}
}

/**
 * 处理动态路由（后端返回的路由）
 * @param routes 动态路由数据
 */
function handleAsyncRoutes(routes: RouteRecordRaw[]) {
	if (routes.length === 0) {
		usePermissionStore().handleWholeMenus(routes);
	} else {
		// 扁平化处理之后的路由数据
		formatTwoStageRoutes(flatTreeToArray(buildHierarchyTree(outerSortAsc(handleFilterAsyncRoute(routes).flat(Infinity))))).map((el) => {
			// 防止重复添加路由
			if (router.options.routes[0].children?.findIndex((v) => v.name === el.name) !== -1) {
				return;
			} else {
				// 将路由信息push到routes里面，然后再试addRoute添加路由
				router.options.routes[0].children.push(el);
				if (!router.hasRoute(el.name!)) router.addRoute(el);
			}
		});
		usePermissionStore().handleWholeMenus(routes);
	}
	// 最后添加匹配路由
	addPathMatch();
}

/**
 * 过滤后端传来的动态路由 重新生成规范路由
 * @param asyncRoutes 动态路由数据
 * @param parentRoute 父级路由
 * @returns
 */
function handleFilterAsyncRoute(asyncRoutes: RouteRecordRaw[], parentRoute?: RouteRecordRaw) {
	if (!asyncRoutes || asyncRoutes.length === 0) return [];
	asyncRoutes.forEach((route) => {
		// 父级重定向：若子级存在且父级redirect不存在，则使用父级redirect（若不存在，使用path） 拼上子级path
		if (route.children?.length && !route.redirect) route.redirect = parentRoute?.redirect || route.path + '/' + route.children[0].path;
		// 父级路由名称：若子级存在且父级name属性不存在，则取第一个子级的Name + `Parent`
		if (route.children?.length && !route.name) route.name = (route.children[0].name as string) + 'Parent';
		if ((route.component as unknown as string) === 'Layout') {
			route.component = Layout;
		} else if (route.meta?.frameSrc) {
			route.component = IFrameView;
		} else {
			route.component = resolveView(route.component);
		}
		if (route.children?.length) {
			handleFilterAsyncRoute(route.children, route);
		}
	});
	return asyncRoutes;
}

/**
 * 获取动态路由
 */
function initRoutes() {
	return new Promise((resolve) => {
		// getAsyncRouters().then()
		handleAsyncRoutes([]);
	});
}

export { outerSortAsc, formatTwoStageRoutes, filterHiddenTree, initRoutes, findRouteByPath, getParentPaths };
