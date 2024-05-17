<script setup lang="ts" name="SubMenu">
	import path from 'path-browserify';
	import AppLink from './AppLink.vue';
	import { PropType, toRaw } from 'vue';
	import { propTypes } from '@/utils/propTypes';
	import { isExternal } from '@/utils/validate';
	import { translateRouteTitle } from '@/utils/locales';

	const props = defineProps({
		item: {
			type: Object as PropType<MenuOption>,
			required: true
		},
		isNest: propTypes.bool.def(false),
		basePath: propTypes.string.def('')
	});

	const onlyOneChild: MenuOption = ref(null);

	function hasOneShowChild(children: MenuOption[] = [], parent: MenuOption) {
		const showChildren = children.filter((item) => {
			onlyOneChild.value = item;
			return true;
		});

		if (showChildren[0] && showChildren[0].meta?.showParent) {
			return false;
		}

		if (showChildren.length === 1) {
			return true;
		}
		if (showChildren.length === 0) {
			onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
			return true;
		}
		return false;
	}

	function resolvePath(routePath: string) {
		if (isExternal(routePath) || isExternal(props.basePath)) {
			return routePath || props.basePath;
		} else {
			// 使用path.posix.resolve替代path.resolve 避免windows环境下使用electron出现盘符问题
			return path.posix.resolve(props.basePath, routePath);
		}
	}
</script>

<template>
	<app-link v-if="hasOneShowChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)" :to="item">
		<el-menu-item :index="resolvePath(onlyOneChild.path!)" :class="{ 'submenu-title-noDropdown': !isNest }">
			<Icon v-if="toRaw(onlyOneChild.meta?.icon)" :name="toRaw(onlyOneChild.meta?.icon) || item.meta?.icon!" :size="20" />
			<template #title>
				<!-- truncate 多行溢出省略号 -->
				<span :class="['truncate', !toRaw(onlyOneChild.meta?.icon) && 'pl-7']">{{ translateRouteTitle(onlyOneChild.meta?.title!) }}</span>
			</template>
		</el-menu-item>
	</app-link>
	<el-sub-menu v-else ref="subMenu" teleported :index="resolvePath(item.path!)">
		<template #title>
			<Icon v-if="toRaw(item.meta?.icon)" :name="toRaw(item.meta?.icon) || item.meta?.icon!" :size="20" />
			<!-- truncate 多行溢出省略号 -->
			<span :class="['truncate', !toRaw(item.meta?.icon) && 'pl-7']">{{ translateRouteTitle(item.meta?.title!) }}</span>
		</template>
		<SubMenu v-for="(child, index) in item.children" :key="child.path! + index" :item="child" :base-path="child.path" />
	</el-sub-menu>
</template>
