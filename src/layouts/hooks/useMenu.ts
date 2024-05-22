import { useRoute } from 'vue-router';
import { usePermissionStore, useAppStore } from '@/store';
import { isUrl } from '@/utils/validate';

// 垂直、横向菜单hooks
export const useMenu = () => {
	const route = useRoute();
	const permissionStore = usePermissionStore();
	const appStore = useAppStore();
	const parentRoutes = computed(() => permissionStore.wholeMenus);

	let currName = ref<string | undefined>();

	function resolvePath(route: any) {
		// 第一级菜单
		if (isUrl(route.name)) {
			window.open(route.name);
			return;
		}
		// 取该路由下第一个子级的path
		return route.children[0]?.path;
	}

	return {
		parentRoutes,
		resolvePath,
		currName
	};
};
