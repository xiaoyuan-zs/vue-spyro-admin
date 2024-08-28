<script setup lang="ts">
	import { useLayoutStore, useAppStore } from '@/store';
	import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { useIcon } from '@/hooks';
	import { findRouteByPath, getParentPaths } from '@/router/helpers/utils';

	const route = useRoute();
	const router = useRouter();
	const layoutStore = useLayoutStore();
	const appStore = useAppStore();
	const routes: any = router.options.routes;

	const ArrowRight = useIcon({ name: 'ep:arrow-right' });
	const breadcrumbs = computed(() => layoutStore.breadcrumbs);
	const breadcrumbsIcon = computed(() => layoutStore.breadcrumbsIcon);

	let breadcrumbsMenu = ref<RouteRecordRaw[]>([]);
	const handleBreadCrumb = () => {
		// 通过path查询当前路由信息
		let currentRoute = findRouteByPath(router.currentRoute.value.path, routes);
		// 当前路由的父级路径组成的数组
		const parentRoutes = getParentPaths(router.currentRoute.value.name as string, routes, 'name');
		const matched: RouteRecordRaw[] = [];

		// 获取每个父级路径对应的路由信息
		parentRoutes.forEach((path) => {
			if (path !== '/') matched.push(findRouteByPath(path, routes)!);
		});

		// 先查出父级，在把父级path放进去，最后放入当前path
		matched.push(currentRoute!);

		// 去除与子级中相同的路由信息
		matched.forEach((item, index) => {
			if (item?.children) {
				item.children.forEach((v) => {
					if (v?.meta?.title === item?.meta?.title) {
						matched.splice(index, 1);
					}
				});
			}
		});
		breadcrumbsMenu.value = matched.filter((item) => item?.meta?.title);
	};

	const pointerCondition = (item: RouteRecordRaw) => {
		return route.path !== item.path && item.redirect;
	};

	const handleLink = (item: RouteRecordRaw) => {
		// 后端添加菜单时，根据目录或菜单添加对应的redirect
		if (route.path === item.path || !item.redirect) return;
		// 如果存在redirect， 则跳转redirect
		if (item.redirect) {
			router.push(item.redirect as string);
		}
		router.push(item.path as string);
	};

	watch(
		() => route.path,
		() => {
			handleBreadCrumb();
		},
		{
			immediate: true
		}
	);
</script>

<template>
	<div v-if="breadcrumbs && !appStore.isMobile" class="breadcrumb mask-image-right">
		<el-breadcrumb :separator-icon="ArrowRight">
			<transition-group appear enter-active-class="animate__animated animate__fadeInRight">
				<el-breadcrumb-item v-for="item in breadcrumbsMenu" :key="item.path">
					<div class="breadcrumb-inner" :class="{ pointer: pointerCondition(item) }" @click.prevent="handleLink(item)">
						<div v-show="breadcrumbsIcon" class="pr-1 pt-0.5">
							<Icon v-if="item.meta?.icon" :name="item.meta.icon!" :size="16" />
						</div>
						<span>{{ translateRouteTitle(item.meta?.title!) }}</span>
					</div>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<style scoped lang="scss">
	.breadcrumb {
		display: flex;
		align-items: center;
		margin-left: 12px;
		overflow: hidden;

		.el-breadcrumb {
			white-space: nowrap;

			.el-breadcrumb__item {
				// 设置面包屑响应式不换行
				float: none;

				.breadcrumb-inner {
					display: inline-flex;

					& > span {
						margin-top: 3px;
					}

					&.pointer {
						cursor: pointer;
						transition: all 0.4s ease;
					}

					&.pointer:hover {
						color: var(--el-color-primary);
					}
				}

				:deep(.el-breadcrumb__separator) {
					margin-top: 2px;
				}
			}
		}
	}
</style>
