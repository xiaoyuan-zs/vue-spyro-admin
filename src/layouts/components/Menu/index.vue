<script setup lang="ts" name="Menu">
	import { excludePaths } from '@/router';
	import SubMenu from './SubMenu.vue';
	import { findRouteByPath, getParentPaths } from '@/router/helpers/utils';
	import { usePermissionStore, useLayoutStore, useAppStore } from '@/store';
	import { RouteRecordRaw, useRoute } from 'vue-router';
	import { unref } from 'vue';

	const layoutStore = useLayoutStore();
	const permissionStore = usePermissionStore();
	const appStore = useAppStore();
	const route = useRoute();

	const layout = computed(() => layoutStore.layout);
	const isCollapse = computed(() => appStore.isCollapse);
	const menuMode = computed(() => (unref(layout) === 'horizontal' ? 'horizontal' : 'vertical'));
	const menuCollapse = computed(() => (unref(layout) === 'horizontal' ? false : unref(isCollapse)));
	const menuUnique = computed(() => layoutStore.menuUnique);
	const { wholeMenus } = storeToRefs(permissionStore);

	//
	const subMenuData = ref<Array<RouteRecordRaw>>([]);
	//菜单模式
	const menuList = computed(() =>
		['mixins', 'lattice'].includes(layoutStore.layout!) && !appStore.isMobile ? subMenuData.value : wholeMenus.value
	);

	const activeMenu = computed<string>(() => {
		const { path, meta } = route;
		if (meta.activeMenu) return meta.activeMenu;
		return path;
	});

	// 混合布局、栅格布局获取子菜单
	function getSubMenuData() {
		let path = '';
		path = activeMenu.value;
		subMenuData.value = [];
		// path的上级路由组成的数组
		const parentPathArr = getParentPaths(path, wholeMenus.value);
		// 当前路由的父级路由信息
		const parentRoute = findRouteByPath(parentPathArr[0] || path, wholeMenus.value);
		if (!parentRoute?.children) return;
		subMenuData.value = parentRoute?.children;
	}

	// 切换布局重新构建菜单
	function menuSelect(indexPath: string) {
		if (wholeMenus.value.length === 0 || excludePaths.includes(indexPath)) return;
	}

	// 监听路由的变化，过滤出当前路由的子路由集合(作用于栅格和混合布局)
	watch(
		() => [route.path, permissionStore.wholeMenus],
		() => {
			if (route.path.includes('/redirect')) return;
			getSubMenuData();
			menuSelect(route.path);
		}
	);

	onMounted(() => {
		getSubMenuData();
	});
</script>

<template>
	<el-menu
		:class="{ '!border-0 !w-full': unref(layout) !== 'horizontal' }"
		:default-active="unref(activeMenu)"
		router
		:mode="unref(menuMode)"
		:unique-opened="unref(menuUnique)"
		:collapse="unref(menuCollapse)"
		:collapse-transition="false">
		<SubMenu v-for="(menu, index) in menuList" :key="menu.path + index" :item="<MenuOption>menu" :base-path="menu.path" />
	</el-menu>
</template>
