import constantRoutes from './modules/constant';
import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import type { App } from 'vue';
import { staticRoutes } from './helpers/process';

/**
 * 注册路由
 */
export const router: Router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
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
