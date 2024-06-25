import { usePermissionStore } from '@/store';
import { useRouter } from 'vue-router';
import { isUrl } from '@spyro/utils';
import { getParentPaths } from '@/router/helpers/utils';

// 垂直、横向菜单hooks
export const useMenu = () => {
	const permissionStore = usePermissionStore();
	const parentRoutes = computed(() => permissionStore.wholeMenus);

	const { currentRoute } = useRouter();

	function resolvePath(route: any) {
		// 第一级菜单若为外链则跳转外链
		if (isUrl(route.name)) {
			window.open(route.name);
			return;
		}
		// 取该路由下第一个子级的path（自动跳转，Menu组件中过滤出当前跳转路由的同级路由）
		return route.children[0]?.path;
	}

	// 设置高亮
	const isActive = (currentPath: string) => {
		const { path } = unref(currentRoute);
		// 获取当前路由的父级路径
		const parentPathArr = getParentPaths(path, unref(parentRoutes));
		return parentPathArr[0] === currentPath;
	};

	return {
		parentRoutes,
		resolvePath,
		isActive
	};
};
