<script setup lang="ts">
	import Menu from './index.vue';
	import { ClickOutside as vClickOutside } from 'element-plus';
	import { RouteRecordRaw, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { toRaw, unref } from 'vue';
	import { useMenu } from '@/layouts/hooks/useMenu';

	const showMenu = ref(false);

	const { push } = useRouter();
	const { parentRoutes, resolvePath, isActive } = useMenu();

	const changeMenu = (route: RouteRecordRaw) => {
		showMenu.value = true;
		const path = resolvePath(route);
		if (path) push(path);
	};

	const clickOut = () => {
		showMenu.value = false;
	};
</script>

<template>
	<div class="h-full" v-click-outside="clickOut">
		<el-aside class="aside !w-20 !h-full">
			<el-scrollbar>
				<div v-for="menu in parentRoutes" :key="menu.name" @click="changeMenu(menu)">
					<div
						:class="[
							{ 'is-active': isActive(menu.path) },
							'flex-col-center h-16 cursor-pointer hover:text-[var(--el-color-primary)] transition'
						]">
						<span v-if="toRaw(menu.meta?.icon)">
							<Icon :name="toRaw(menu.meta?.icon)!" />
						</span>
						<span class="text-xs">
							{{ translateRouteTitle(menu.meta?.title!) }}
						</span>
					</div>
				</div>
			</el-scrollbar>
			<div :class="['aside-menu', unref(showMenu) ? 'w-[var(--left-menu-max-width)] b-r-1' : 'w-0']">
				<Menu />
			</div>
		</el-aside>
	</div>
</template>

<style scoped lang="scss">
	.aside {
		@apply flex-col-stretch bg-background  border-r-1  border-[var(--el-color-info-light-8)] transition-width duration-300;
	}

	.aside-menu {
		@apply h-full absolute z-9999 overflow-hidden left-20 bg-[var(--el-bg-color)] border-[var(--el-color-info-light-8)] transition-width duration-300;
	}

	.is-active {
		color: var(--el-color-primary);
		background-color: var(--el-color-primary-light-9);
	}
</style>
