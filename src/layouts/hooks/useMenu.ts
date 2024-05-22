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
		if (isUrl(route.name)) return route.name;
		const routeChildPath = route.children[0]?.path;
		if (isUrl(routeChildPath)) {
			return route.path + '/' + routeChildPath;
		} else {
			return routeChildPath;
		}
	}

	return {
		parentRoutes,
		resolvePath,
		currName
	};
};
