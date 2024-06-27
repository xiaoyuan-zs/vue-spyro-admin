import router from '@/router';
import type { RouteLocationNormalized } from 'vue-router';
import { start, done } from '@/plugins/nprogress';
import { useUserStore, usePermissionStore } from '@/store';
import { initRoutes } from '@/router/helpers/handleRoutes';
import { translateRouteTitle } from '@/utils/locales';

// 白名单
const whiteList = ['/login'];
const title = import.meta.env.VITE_APP_TITLE;

router.beforeEach(async (to, from, next) => {
	start();
	const permissionStore = usePermissionStore();
	const userStore = useUserStore();
	if (!userStore.accessToken) {
		// 没有token
		if (whiteList.includes(to.path)) {
			// 在免登录白名单，直接进入
			next();
		} else {
			next({
				path: `/login`,
				query: { redirect: to.fullPath }
			}); // 否则全部重定向到登录页
		}
	}
	// 如去登陆页自动跳转到主页
	if (to.path === '/login') {
		next({ path: '/' });
	}

	if (!permissionStore.wholeMenus.length) {
		try {
			await initRoutes();
			next({ ...to, replace: true });
		} catch (error) {
			// 退出token 并跳转登录页
			await userStore.logoutAction();
			next({
				path: `/login`,
				query: { redirect: to.fullPath }
			});
		}
	} else {
		next();
	}
});

router.afterEach((to: RouteLocationNormalized) => {
	if (to.meta.title) {
		document.title = translateRouteTitle(to.meta.title) + '-' + title;
	}
	done();
});
