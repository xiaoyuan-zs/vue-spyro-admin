<script setup lang="ts">
	import { useLayoutStore, useAppStore } from '@/store';
	import { useRoute, useRouter, type RouteLocationMatched } from 'vue-router';
	import { translateRouteTitle } from '@/utils/locales';
	import { useIcon } from '@/hooks/modules/useIcon';

	const route = useRoute();
	const router = useRouter();
	const layoutStore = useLayoutStore();
	const appStore = useAppStore();

	const ArrowRight = useIcon({ name: 'ep:arrow-right' });
	const breadcrumbs = computed(() => layoutStore.breadcrumbs);
	const breadcrumbsIcon = computed(() => layoutStore.breadcrumbsIcon);

	let breadcrumbsMenu = ref<RouteLocationMatched[]>([]);
	const handleBreadCrumb = () => {
		let matched = route.matched.filter((item) => item.meta?.title && item.name);
		// 添加首页面包屑
		if (matched[0].name !== 'HomePage') {
			matched = [{ path: '/', meta: { title: 'menus.homepage', icon: 'HomeFilled' } } as RouteLocationMatched, ...matched];
		}
		breadcrumbsMenu.value = matched;
	};

	const pointerCondition = (item: RouteLocationMatched) => {
		return route.path !== item.path && item.redirect;
	};

	const handleLink = (item: RouteLocationMatched) => {
		// 后端添加菜单时，根据目录或菜单添加对应的redirect
		if (route.path === item.path || !item.redirect) return;
		// 如果存在redirect， 则跳转redirect
		if (item.redirect) {
			router.push(item.redirect as string);
		}
		router.push(item.path as string);
	};

	watchEffect(() => {
		handleBreadCrumb();
	});
</script>

<template>
	<div v-if="breadcrumbs && !appStore.isMobile" class="breadcrumb mask-image-right">
		<el-breadcrumb :separator-icon="ArrowRight">
			<!-- <el-breadcrumb-item v-for="item in breadcrumbsMenu" :key="item.path">
				<div class="breadcrumb-inner" :class="{ pointer: pointerCondition(item) }" @click.prevent="handleLink(item)">
					<span>{{ translateRouteTitle(item.meta.title!) }}</span>
				</div>
			</el-breadcrumb-item> -->
		</el-breadcrumb>
	</div>
</template>

<style scoped lang="scss">
	.breadcrumb {
		display: flex;
		align-items: center;
		overflow: hidden;

		.el-breadcrumb {
			white-space: nowrap;

			.el-breadcrumb__item {
				// 设置面包屑响应式不换行
				float: none;

				.breadcrumb-inner {
					display: inline-flex;

					& .el-icon {
						margin-top: 3px;
						margin-right: 6px;
						font-size: 14px;
					}

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
