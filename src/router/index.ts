import { buildHierarchyTree, flatTreeToArray } from '@spyro/utils';
import { formatTwoStageRoutes, outerSortAsc } from './helpers/utils';
import constantRoutes from './modules/constant';
import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

/** 导入modules 下的静态路由 */
const modules: Record<string, any> = import.meta.glob(['./modules/**/*.ts', '!./modules/**/constant.ts'], {
	eager: true
});

/** 原始静态路由 */
const routes: RouteOption[] = [];
Object.keys(modules).forEach((key) => {
	const route = modules[key].default;
	Array.isArray(route) ? routes.push(...route) : routes.push(route);
});

/** 导出处理后的本地静态路由（三级及以上的路由全部扁平化为二级，为keep-alive缓存使用） */
export const staticRoutes: RouteRecordRaw[] = formatTwoStageRoutes(
	flatTreeToArray(buildHierarchyTree(outerSortAsc(routes.flat(Infinity))))
);

/** 用于渲染本地静态、常量菜单，保持原始层级 */
export const constantMenus = routes.flat(Infinity).concat(...constantRoutes) as RouteRecordRaw[];

/** 过滤出常量路由，不参与菜单绘制 */
export const excludePaths = constantRoutes.map((v) => v.path);

/**
 * 注册路由
 */
export const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: staticRoutes.concat(...constantRoutes),
	scrollBehavior: () => ({ top: 0, left: 0 })
});

/**
 * 重置路由
 */
export const resetRouter = (): void => {
	const resetWhiteNameList = ['Login'];
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name && !resetWhiteNameList.includes(name as string)) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
};

export async function setupRouter(app: App) {
	app.use(router);
	await router.isReady();
}
export default router;
