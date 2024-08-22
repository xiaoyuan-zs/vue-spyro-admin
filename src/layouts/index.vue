<script setup lang="ts">
	import AppSetting from './components/AppSetting/index.vue';
	import { AppMask } from './components';
	import { useAppStore, useLayoutStore } from '@/store';
	import { useRenderLayout } from './components/useRenderLayout';
	import { deviceDetection } from './helpers/deviceDetection';

	defineOptions({
		name: 'Layout'
	});

	const containerRef = ref<HTMLElement>();

	const appStore = useAppStore();
	const layoutStore = useLayoutStore();

	// mask蒙层
	const showAppMask = computed(() => appStore.isMobile && !appStore.isCollapse);
	const closeAppMask = () => appStore.$patch({ isCollapse: true });
	// 视口适配移动端
	deviceDetection(containerRef);

	const { LayoutVertical, LayoutBasic, LayoutHorizontal, LayoutLattice, LayoutMixins } = useRenderLayout();

	const renderLayout = () => {
		switch (unref(layoutStore.layout)) {
			case 'vertical':
				return LayoutVertical();
			case 'basic':
				return LayoutBasic();
			case 'horizontal':
				return LayoutHorizontal();
			case 'lattice':
				return LayoutLattice();
			case 'mixins':
				return LayoutMixins();
			default:
				break;
		}
	};

	const LayoutModel = defineComponent({
		name: 'LayoutModel',
		render() {
			return h(renderLayout()!);
		}
	});
</script>

<template>
	<el-container ref="containerRef" class="h-full">
		<AppMask v-show="showAppMask" @click.prevent="closeAppMask" />
		<LayoutModel />
	</el-container>
	<app-setting />
</template>
