<script setup lang="ts">
	import Menu from './index.vue';
	import AppLink from './AppLink.vue';
	import { RouteRecordRaw, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { useAppStore } from '@/store';
	import { toRaw } from 'vue';
	import { useMenu } from '@/layouts/hooks/useMenu';
	import { isUrl } from '@/utils/validate';

	const { push, currentRoute } = useRouter();
	const appStore = useAppStore();

	const { parentRoutes, resolvePath } = useMenu();

	const defaultActive = ref<string>();

	const changeMenu = (route: RouteRecordRaw) => {
		if (isUrl(route.path)) {
			window.open(route.path);
			return;
		}
		console.log(321, resolvePath(route));
		push(resolvePath(route));
	};

	// 设置高亮
	const isActive = (currentPath: string) => {
		const { path } = unref(currentRoute);
		return false;
	};

	onMounted(() => {});

	onUnmounted(() => {});
</script>

<template>
	<el-aside class="aside !w-20">
		<el-scrollbar>
			<div class="h-full">
				<div v-for="menu in parentRoutes" :key="menu.name">
					<app-link :to="resolvePath(<MenuOption>menu)">
						<div class="flex-col-center h-16 cursor-pointer hover:text-[var(--el-color-primary)] transition">
							<span v-if="toRaw(menu.meta?.icon)">
								<Icon :name="toRaw(menu.meta?.icon)!" />
							</span>
							<span class="text-xs">
								{{ translateRouteTitle(menu.meta?.title!) }}
							</span>
						</div>
					</app-link>
				</div>
			</div>
		</el-scrollbar>
	</el-aside>
	<div class="aside-sub-menu w-[var(--left-menu-max-width)]">
		<Menu />
	</div>
</template>

<style scoped lang="scss">
	.aside {
		@apply relative py-2 flex-col-stretch bg-background  border-r-1  border-[var(--el-color-info-light-8)] transition-width duration-300;
	}

	.aside-sub-menu {
		@apply h-full py-2 absolute z-999 left-20 bg-[var(--el-bg-color)] b-r-1 border-[var(--el-color-info-light-8)] transition-width duration-300;
	}

	.is-active {
		color: var(--el-color-primary);
		background-color: var(--el-color-primary-light-9);
	}
</style>
