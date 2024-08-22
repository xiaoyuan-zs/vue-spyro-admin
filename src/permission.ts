import router from '@/router';
import { start, done } from '@/plugins';
import { useUserStore, usePermissionStore } from '@/store';
import { initRoutes } from '@/router/helpers/handleRoutes';

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
			return;
		}
	}
	// 如去登陆页自动跳转到主页
	if (to.path === '/login') {
		next({ path: '/' });
		return;
	}

	if (!permissionStore.wholeMenus.length) {
		try {
			await userStore.getUserInfoAction();
		} finally {
			await initRoutes();
			next({ ...to, replace: true });
		}
	} else {
		next();
	}
});

router.afterEach((to) => {
	if (to.meta.title) {
		document.title = to.meta.title + '-' + title;
	}
	done();
});
