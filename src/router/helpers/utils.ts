import { isUndefined, orderBy } from '@spyro/utils';
import { createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { usePermission } from '@/hooks';

/**
 * 对最外层路由进行过滤
 * @param routes 路由
 */
function outerSortAsc(routes: any[]) {
	routes.forEach((el, index) => {
		if (isUndefined(el.meta?.sort)) {
			el.meta.sort = index + 2;
		}
	});
	return orderBy(routes, [[(item: any) => item.meta.sort, 'asc']]);
}

/**
 * 判断路由模式
 * @param mode 路由模式
 */
function judgeRouterHistoryMode(mode: string) {
	if (mode === 'hash') {
		return createWebHashHistory();
	}
	if (mode === 'h5') {
		return createWebHistory(import.meta.env.BASE_URL);
	}
	return createWebHashHistory();
}

/**
 * 过滤meta中hidden为true的菜单
 * @param data 路由数据
 * @returns 返回去除hidden:true的路由对象数组
 */
function filterHiddenTree(routes: RouteRecordRaw[]) {
	const newTree = routes.filter((v) => !v.meta?.hidden);
	newTree.forEach((v) => v.children && (v.children = filterHiddenTree(v.children)));
	return newTree;
}

/**
 * 一维数组处理成二级级嵌套数组（三级及以上的路由全部扁平为二级，keep-alive 只支持到二级缓存）
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
 * 通过指定 `key` 获取父级路径集合，默认 `key` 为 `path` (无子父层级)
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
 * 动态遍历路由，验证是否具有权限
 * @param routes 路由数据
 */
function filterDynamicRoutes(routes: RouteRecordRaw[]) {
	const newTree = routes.filter((v) => {
		if (v.meta?.permissions) {
			return usePermission().hasPermissions(v.meta.permissions);
		}
		if (v.meta?.roles) {
			return usePermission().hasRoles(v.meta.roles);
		}
		return true;
	});
	newTree.forEach((v) => v.children && (v.children = filterDynamicRoutes(v.children)));
	return newTree;
}

export {
	outerSortAsc,
	formatTwoStageRoutes,
	filterHiddenTree,
	findRouteByPath,
	getParentPaths,
	filterDynamicRoutes,
	judgeRouterHistoryMode
};
