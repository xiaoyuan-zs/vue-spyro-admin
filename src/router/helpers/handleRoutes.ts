import { router } from '@/router';
import { usePermissionStore } from '@/store/modules/permission';
import { buildHierarchyTree, flatTreeToArray } from '@spyro/utils';
import { permissionRoutes } from './process';
import type { RouteRecordRaw } from 'vue-router';
import { getAsyncRoutes } from '@/api/login';

// 导入views 下的所有 vue 或 tsx
const modulesRoutes = import.meta.glob('/src/views/**/*.{vue,tsx}');

// 定义组件
const layoutView = {
	Layout: () => import('@/layouts/index.vue'),
	IFrameView: () => import('@/layouts/iframeView.vue'),
	LinkView: () => import('@/layouts/linkView.vue')
};

/**
 * 解析组件
 * @param component
 */
function resolveView(component: any) {
	let reg = /\/src\/views\/|.vue/g;
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
			redirect: '/404'
		});
	}
}

/**
 * 处理异步路由（后端返回的路由）
 * @param routes 异步路由数据
 */
function handleAsyncRoutes(routes: RouteRecordRaw[]) {
	let flatAsyncRoutes: RouteRecordRaw[] = [];
	// 处理异步路由
	if (Array.isArray(routes) && routes.length) {
		flatAsyncRoutes = flatTreeToArray(buildHierarchyTree(handleFilterAsyncRoute(routes).flat(Infinity))) as RouteRecordRaw[];
	}
	// 注册添加异步、动态权限路由
	permissionRoutes.concat(flatAsyncRoutes).forEach((el) => {
		// 防止重复添加路由
		if (router.options.routes[0].children?.findIndex((v) => v.path === el.path) !== -1) {
			return;
		} else {
			// 将路由信息push到routes里面，与静态路由同级，然后在使用addRoute添加路由，使其能正常工作
			router.options.routes[0].children.push(el);
			// 注册不存在的路由
			if (!router.hasRoute(el.name!)) router.addRoute(el);
			// 找到 / 路由，将其重新添加到路由表中，否则会导致页面子父级不对
			const allRoutes = router.getRoutes().find((v) => v.path === '/');
			router.addRoute(allRoutes!);
		}
	});

	usePermissionStore().handleWholeMenusActions(routes);

	// 最后添加匹配路由
	addPathMatch();
}

/**
 * 过滤后端传来的异步路由 重新生成规范路由
 * @param asyncRoutes 异步路由数据
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
		const component = layoutView[route.component as unknown as keyof typeof layoutView];
		route.component = component || resolveView(route.component);
		if (route.children?.length) {
			handleFilterAsyncRoute(route.children, route);
		}
	});
	return asyncRoutes;
}

/**
 * 获取异步路由
 */
function initRoutes() {
	return new Promise(async (resolve) => {
		const { data } = await getAsyncRoutes();
		handleAsyncRoutes(data);
		resolve(router);
	});
}

export { initRoutes };
