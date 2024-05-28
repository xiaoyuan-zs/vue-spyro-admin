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
		<el-aside class="aside !w-[var(--left-vertical-menu-width)] !h-full">
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
		@apply h-full absolute z-9999 overflow-hidden left-[var(--left-vertical-menu-width)] bg-[var(--el-bg-color)] border-[var(--el-color-info-light-8)] transition-width duration-300;
	}

	.vertical-menu {
		@apply relative flex-col-center h-16 cursor-pointer hover:text-[var(--el-color-primary)] transition;

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
			background: var(--el-fill-color);
			border-radius: 6px;
		}

		&.is-active {
			position: relative;
			color: var(--el-color-primary);

			&::before {
				position: absolute;
				inset: 2px 5px;
				clear: both;
				content: '';
				background-color: var(--el-color-primary-light-9);
				border-radius: 6px;
			}
		}
	}
</style>
