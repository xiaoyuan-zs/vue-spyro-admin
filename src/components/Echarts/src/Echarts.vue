<script setup lang="ts">
	import { echarts, type ECOption } from '@/plugins';
	import { type EChartsType } from 'echarts/core';
	import { useDebounceFn } from '@vueuse/core';
	import { useLayoutStore } from '@/store';

	interface Props {
		option: ECOption;
		width?: string;
		height: string;
		theme?: string | Object;
		loading?: boolean;
		onMouseover?: (...args: any[]) => any;
		onMouseout?: (...args: any[]) => any;
	}

	const props = withDefaults(defineProps<Props>(), {
		theme: useLayoutStore().colorMode,
		width: '100%',
		loading: false
	});

	const echartRef = ref<HTMLDivElement>();
	const chartInstance = ref<EChartsType>();

	const draw = () => {
		if (chartInstance.value) {
			// 是否不跟之前设置的 option 进行合并。默认为false。即表示合并。合并的规则，详见组件合并模式。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件
			chartInstance.value.setOption({ ...props.option, backgroundColor: 'transparent' }, { notMerge: true });
		}
	};

	const init = () => {
		if (!echartRef.value) return;
		// 校验Domain、节点上是否已经挂载了实例
		chartInstance.value = echarts.getInstanceByDom(echartRef.value);
		if (!chartInstance.value) {
			chartInstance.value = markRaw(echarts.init(echartRef.value, props.theme));

			if (props.onMouseover) {
				chartInstance.value.on('mouseover', (event: Object) => {
					props.onMouseover && props.onMouseover(event, chartInstance.value, props.option);
				});
			}

			if (props.onMouseout) {
				chartInstance.value.on('mouseout', (event: Object) => {
					props.onMouseout && props.onMouseout(event, chartInstance.value, props.option);
				});
			}

			draw();
		}
	};

	const resize = () => {
		chartInstance.value && chartInstance.value.resize({ animation: { duration: 300 } });
	};

	// 自适应防抖
	const debouncedResize = useDebounceFn(resize, 200, { maxWait: 500 });

	// 暴露给父组件使用
	defineExpose({
		instance: () => chartInstance.value,
		resize,
		draw
	});

	// 监听传入的值
	watch(props, () => {
		draw();
	});

	// 加载loading
	watch(
		() => props.loading,
		(newValue) => {
			newValue ? chartInstance.value?.showLoading() : chartInstance.value?.hideLoading();
		}
	);

	// 暗黑模式切换
	watch(
		() => useLayoutStore().colorMode,
		() => {
			if (chartInstance.value) {
				// 销毁实例，实例销毁后无法再被使用。
				chartInstance.value.dispose();
				init();
			}
		}
	);

	onMounted(() => {
		init();
		window.addEventListener('resize', debouncedResize);
	});

	onBeforeUnmount(() => {
		chartInstance.value?.dispose();
		window.removeEventListener('resize', debouncedResize);
	});
</script>

<template>
	<div ref="echartRef" :style="{ width, height }" />
</template>
