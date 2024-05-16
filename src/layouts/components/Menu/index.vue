<script setup lang="ts" name="Menu">
	import SubMenu from './SubMenu.vue';
	import { findRouteByPath, getParentPaths } from '@/router/utils';
	import { usePermissionStore, useLayoutStore, useAppStore } from '@/store';
	import { RouteRecordRaw, useRoute } from 'vue-router';

	const layoutStore = useLayoutStore();
	const permissionStore = usePermissionStore();
	const appStore = useAppStore();
	const route = useRoute();

	const isCollapse = computed(() => appStore.isCollapse);
	const menuUnique = computed(() => layoutStore.menuUnique);

	const subMenuData = ref<Array<RouteRecordRaw>>([]);
	//菜单模式
	const menuList = computed(() =>
		['gradient', 'lattice'].includes(layoutStore.layout!) && !appStore.isMobile ? subMenuData.value : permissionStore.wholeMenus
	);

	const activeMenu = computed<string>(() => {
		const { path, meta } = route;
		if (meta.activeMenu) return meta.activeMenu;
		return path;
	});

	function getSubMenuData() {
		let path = '';
		path = activeMenu.value;
		subMenuData.value = [];
		// path的上级路由组成的数组
		const parentPathArr = getParentPaths(path, permissionStore.wholeMenus);
		// 当前路由的父级路由信息
		const parentRoute = findRouteByPath(parentPathArr[0] || path, permissionStore.wholeMenus);
		if (!parentRoute?.children) return;
		subMenuData.value = parentRoute?.children;
	}

	watch(
		() => [route.path, permissionStore.wholeMenus],
		() => {
			if (route.path.includes('/redirect')) return;
			getSubMenuData();
		}
	);

	onMounted(() => {
		getSubMenuData();
	});
</script>

<template>
	<el-scrollbar wrap-class="scrollbar-wrapper">
		<el-menu
			class="!border-0 !w-full"
			:default-active="activeMenu"
			router
			:unique-opened="menuUnique"
			:collapse="isCollapse"
			:collapse-transition="false"
			popper-effect="dark">
			<SubMenu v-for="(menu, index) in menuList" :key="menu.path + index" :item="menu" :base-path="menu" />
		</el-menu>
	</el-scrollbar>
</template>

<style scoped lang="scss"></style>
