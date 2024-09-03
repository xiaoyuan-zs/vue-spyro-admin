import type { App } from 'vue';
import { createRouter, type RouteRecordRaw, type Router } from 'vue-router';
import { staticRoutes } from './helpers/process';
import { judgeRouterHistoryMode } from './helpers/utils';
import constantRoutes from './modules/constant';

/**
 * 注册路由
 */
export const router: Router = createRouter({
	history: judgeRouterHistoryMode(import.meta.env.VITE_ROUTER_MODE),
	routes: staticRoutes.concat(constantRoutes as RouteRecordRaw[]),
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
