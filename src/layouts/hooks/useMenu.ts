import { useRoute } from 'vue-router';
import { usePermissionStore, useAppStore } from '@/store';
import { isUrl } from '@/utils/validate';

// 垂直、横向菜单hooks
export const useMenu = () => {
	const permissionStore = usePermissionStore();
	const appStore = useAppStore();
	const parentRoutes = computed(() => permissionStore.wholeMenus);
	const isMobile = computed(() => appStore.isMobile);

	function resolvePath(route: any) {
		// 第一级菜单若为外链则跳转外链
		if (isUrl(route.name)) {
			window.open(route.name);
			return;
		}
		// 取该路由下第一个子级的path（自动跳转，Menu组件中过滤出当前跳转路由的同级路由）
		return route.children[0]?.path;
	}

	return {
		parentRoutes,
		resolvePath,
		isMobile
	};
};
