<script setup lang="ts">
	import { RouteRecordRaw, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { toRaw } from 'vue';
	import { useMenu } from '@/layouts/hooks/useMenu';

	const { push } = useRouter();
	const { parentRoutes, resolvePath, isActive } = useMenu();

	const changeMenu = (route: RouteRecordRaw) => {
		const path = resolvePath(route);
		if (path) push(path);
	};
</script>

<template>
	<horizontal-scroll>
		<div class="flex-center flex-nowrap w-full h-full">
			<div v-for="menu in parentRoutes" :key="menu.name" @click="changeMenu(menu)">
				<div
					:class="[
						{ 'is-active': isActive(menu.path) },
						'flex-center h-15 cursor-pointer px-5 hover:text-[var(--el-color-primary)] transition'
					]">
					<span v-if="toRaw(menu.meta?.icon)">
						<Icon :name="toRaw(menu.meta?.icon)!" />
					</span>
					<span class="text-sm text-nowrap pl-1">
						{{ translateRouteTitle(menu.meta?.title!) }}
					</span>
				</div>
			</div>
		</div>
	</horizontal-scroll>
</template>

<style scoped lang="scss">
	.is-active {
		color: var(--el-color-primary);

		// background-color: var(--el-color-primary-light-9);
	}
</style>
