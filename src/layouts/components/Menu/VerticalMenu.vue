<script setup lang="ts">
	import Menu from './index.vue';
	import router from '@/router';
	import { ClickOutside as vClickOutside } from 'element-plus';
	import { RouteRecordRaw, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { toRaw, unref } from 'vue';
	import { useMenu } from '@/layouts/hooks/useMenu';

	const showMenu = ref(false);

	const appTitle = import.meta.env.VITE_APP_TITLE;

	const { push } = useRouter();
	const { parentRoutes, parentPath, resolvePath, isActive } = useMenu();

	const goHome = () => router.push('/index');

	const changeMenu = (route: RouteRecordRaw) => {
		showMenu.value = true;
		const path = resolvePath(route);
		// 若点击的父级是当前路由的父级，则不做处理
		if (unref(parentPath) !== route.path) push(path);
	};

	const clickOut = () => {
		showMenu.value = false;
	};
</script>

<template>
	<div v-click-outside="clickOut" class="h-full">
		<el-aside class="aside !w-[var(--left-vertical-menu-width)] !h-full">
			<div class="flex-center shrink-0 h-[var(--logo-height)] w-full nowrap-hidden cursor-pointer" @click="goHome">
				<Icon name="spyro:logo" :size="30" color="var(--el-color-primary)" />
			</div>
			<el-scrollbar>
				<div v-for="menu in parentRoutes" :key="menu.name" @click="changeMenu(menu)">
					<div :class="[{ 'is-active': isActive(menu.path) }, 'vertical-menu']">
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
				<div
					class="flex-center shrink-0 bg-[var(--left-menu-bg-color)] h-[var(--logo-height)] w-full nowrap-hidden cursor-pointer"
					@click="goHome">
					<h3 class="ml-2 text-4 text-primary truncate font-bold">{{ appTitle }}</h3>
				</div>
				<Menu />
			</div>
		</el-aside>
	</div>
</template>

<style scoped lang="scss">
	.aside {
		@apply flex-col-stretch bg-[var(--left-menu-bg-color)]  border-r-1  border-[var(--left-menu-border-color)] transition-width duration-300;
	}

	.aside-menu {
		@apply h-full absolute z-9999 overflow-hidden left-[var(--left-vertical-menu-width)] bg-[var(--el-bg-color)] border-[var(--left-menu-border-color)] transition-width duration-300;
	}

	.vertical-menu {
		@apply relative flex-col-center h-16 cursor-pointer text-[var(--left-menu-text-color)] hover:text-[var(--el-color-primary)] transition;

		& > * {
			z-index: 1;
		}

		&:not(.is-active):hover {
			background-color: transparent;
		}

		&:hover::before {
			position: absolute;
			inset: 2px 5px;
			clear: both;
			content: '';
			background: var(--left-menu-hover-bg-color);
			border-radius: 6px;
		}

		&.is-active {
			position: relative;
			color: var(--left-menu-active-text-color);

			&::before {
				position: absolute;
				inset: 2px 5px;
				clear: both;
				content: '';
				background-color: var(--left-menu-active-bg-color);
				border-radius: 6px;
			}
		}
	}
</style>
