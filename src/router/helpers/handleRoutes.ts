import { router } from '@/router';
import { usePermissionStore } from '@/store/modules/permission';
import { buildHierarchyTree, flatTreeToArray } from '@spyro/utils';
import { formatTwoStageRoutes, outerSortAsc } from './utils';
import type { RouteRecordRaw } from 'vue-router';

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
	if (Array.isArray(routes) && routes.length) {
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
	}
	usePermissionStore().handleWholeMenus(routes);

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
		const component = layoutView[route.component as unknown as keyof typeof layoutView];
		route.component = component || resolveView(route.component);
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
		handleAsyncRoutes([]);
		resolve(router);
	});
}

export { initRoutes };
