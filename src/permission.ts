import router from '@/router';
import { start, done } from '@/plugins/nprogress';
import { useUserStore, usePermissionStore } from '@/store';
import { initRoutes } from '@/router/helpers/handleRoutes';
import { translateRouteTitle } from '@/utils/locales';

// 白名单
const whiteList = ['/login'];
const title = import.meta.env.VITE_APP_TITLE;

router.beforeEach(async (to, _, next) => {
	start();
	const permissionStore = usePermissionStore();
	const userStore = useUserStore();
	if (!userStore.accessToken) {
		// 没有token
		if (whiteList.includes(to.path)) {
			// 在免登录白名单，直接进入
			next();
			return;
		} else {
			// 否则全部重定向到登录页
			next({
				path: `/login?redirect=${to.fullPath}`
			});
		}
	}
	// 如去登陆页自动跳转到主页
	if (to.path === '/login') {
		next({ path: '/' });
	}

	if (!permissionStore.wholeMenus.length) {
		// try {

		// } catch (error) {
		// 	console.log('error ---> error');
		// 	// 退出token 并跳转登录页
		// 	await userStore.logoutAction();
		// 	next({
		// 		path: `/login?redirect=${to.fullPath}`
		// 	});
		// } finally {
		await userStore.getUserInfoAction();
		await initRoutes();
		next({ ...to, replace: true });
		// }
	} else {
		next();
	}
});

router.afterEach((to) => {
	if (to.meta.title) {
		document.title = translateRouteTitle(to.meta.title) + '-' + title;
	}
	done();
});
