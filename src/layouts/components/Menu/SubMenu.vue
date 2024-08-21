<script setup lang="ts">
	import path from 'path';
	import AppLink from './AppLink.vue';
	import { PropType, toRaw } from 'vue';
	import { propTypes } from '@/utils/propTypes';
	import { isUrl } from '@spyro/utils';
	import { translateRouteTitle } from '@/utils/locales';

	defineOptions({
		name: 'SubMenuItem'
	});

	const props = defineProps({
		item: {
			type: Object as PropType<MenuOption>,
			required: true
		},
		basePath: propTypes.string.def('')
	});

	const onlyOneChild: MenuOption = ref(null);

	// 每次循环都会进入该方法进行判断
	function hasOneShowChild(children: MenuOption[] = [], parent: MenuOption) {
		// 遍历当前循环的元素的子级每一项
		const showChildren = children.filter((item) => {
			onlyOneChild.value = item;
			return true;
		});
		// 若存在父级菜单的showParent属性，则需要显示父级菜单，走 el-sub-menu 分支
		if (showChildren[0] && showChildren[0].meta?.showParent) {
			return false;
		}

		// 若当前循环元素只有一个子级，则返回true， 在结合 下方 && 后条件判断 直接显示当前元素的子级菜单
		if (showChildren.length === 1) {
			return true;
		}

		// 若不存在子级，则直接显示当前元素菜单
		if (showChildren.length === 0) {
			onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
			return true;
		}

		// 都不满足则走 el-sub-menu 分支
		return false;
	}

	function resolvePath(routePath: string) {
		if (isUrl(routePath) || isUrl(props.basePath)) {
			return routePath || props.basePath;
		} else {
			// 使用path.posix.resolve替代path.resolve 避免windows环境下使用electron出现盘符问题
			return path.posix.resolve(props.basePath, routePath);
		}
	}
</script>

<template>
	<app-link v-if="hasOneShowChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)" :to="item">
		<el-menu-item :index="resolvePath(onlyOneChild.path!)">
			<Icon v-if="toRaw(onlyOneChild.meta?.icon)" :name="toRaw(onlyOneChild.meta?.icon) || item.meta?.icon!" :size="16" />
			<template #title>
				<span :class="['truncate', !toRaw(onlyOneChild.meta?.icon) && 'pl-7']">{{ translateRouteTitle(onlyOneChild.meta?.title!) }}</span>
			</template>
		</el-menu-item>
	</app-link>
	<el-sub-menu v-else teleported :index="resolvePath(item.path!)">
		<template #title>
			<Icon v-if="toRaw(item.meta?.icon)" :name="toRaw(item.meta?.icon) || item.meta?.icon!" :size="16" />
			<span :class="['truncate', !toRaw(item.meta?.icon) && 'pl-7']">{{ translateRouteTitle(item.meta?.title!) }}</span>
		</template>
		<SubMenuItem v-for="(child, index) in item.children" :key="child.path! + index" :item="child" :base-path="resolvePath(child.path!)" />
	</el-sub-menu>
</template>
