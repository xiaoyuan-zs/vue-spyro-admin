<script setup lang="ts">
	import { RouteRecordRaw, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { unref } from 'vue';
	import { useMenu } from '@/layouts/hooks/useMenu';
	import { getParentPaths } from '@/router/helpers/utils';

	const { push, currentRoute } = useRouter();
	const { parentRoutes, resolvePath, isMobile } = useMenu();

	const changeMenu = (route: RouteRecordRaw) => {
		const path = resolvePath(route);
		if (path) push(path);
	};

	// 设置高亮
	const isActive = (currentPath: string) => {
		const { path } = unref(currentRoute);
		// 获取当前路由的父级路径
		const parentPathArr = getParentPaths(path, unref(parentRoutes));
		return parentPathArr[0] === currentPath;
	};
</script>

<template>
	<horizontal-scroll v-show="!unref(isMobile)">
		<div class="menu-list">
			<div v-for="menu in parentRoutes" :key="menu.name" @click="changeMenu(menu)">
				<div :class="['menu-item', { active: isActive(menu.path) }]">
					{{ translateRouteTitle(menu.meta?.title!) }}
				</div>
			</div>
		</div>
	</horizontal-scroll>
</template>

<style scoped lang="scss">
	.menu-list {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.menu-item {
		position: relative;
		padding: 10px;
		margin: 0 10px;
		font-size: 14px;
		color: var(--al-gradient-text-color);
		white-space: nowrap;
		cursor: pointer;

		&.active {
			position: relative;
		}

		&.active::before {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			height: 2px;
			content: '';
			background-color: var(--al-gradient-text-color);
		}

		&::after {
			position: absolute;
			top: 100%;
			left: 50%;
			width: 0;
			height: 2px;
			content: '';
			background-color: var(--al-gradient-text-color);
			transition: all 0.3s ease;
		}

		&:hover::after {
			left: 0%;
			width: 100%;
		}
	}
</style>
