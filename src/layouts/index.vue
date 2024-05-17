<script setup lang="ts">
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

	const { LayoutVertical } = useRenderLayout();

	const renderLayout = () => {
		switch (unref(layoutStore.layout)) {
			case 'vertical':
				return LayoutVertical();
			case 'basic':
				return LayoutVertical();
			case 'horizontal':
				return LayoutVertical();
			case 'lattice':
				return LayoutVertical();
			case 'mixins':
				return LayoutVertical();
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
	<el-container class="h-full" ref="containerRef">
		<AppMask v-show="showAppMask" @click.prevent="closeAppMask" />
		<LayoutModel />
	</el-container>
</template>
