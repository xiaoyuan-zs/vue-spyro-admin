import { echarts, type ECOption } from '@/plugins';
import type { EChartsType } from 'echarts/core';
import { useDebounceFn } from '@vueuse/core';
import { useLayoutStore } from '@/store';

export const useEcharts = (el: HTMLDivElement, options: ECOption) => {
	let myChart: EChartsType | null = null;

	const initCharts = () => {
		const theme = useLayoutStore().colorMode;
		myChart = markRaw(echarts.init(el, theme));
		setOptions(options);
	};

	const setOptions = (options: ECOption) => {
		myChart && myChart.setOption({ ...options, backgroundColor: 'transparent' });
	};

	// 根据屏幕大小切换
	const resize = useDebounceFn(() => {
		myChart && myChart.resize({ animation: { duration: 300 } });
	}, 200);

	// 初始化执行
	initCharts();

	watch(
		options,
		(newValue) => {
			setOptions(newValue);
		},
		{ deep: true }
	);

	// 暗黑模式切换
	watch(
		() => useLayoutStore().colorMode,
		() => {
			if (myChart) {
				// 销毁实例，实例销毁后无法再被使用。
				myChart.dispose();
				initCharts();
			}
		}
	);

	window.addEventListener('resize', resize);

	onBeforeUnmount(() => {
		if (!myChart) return;
		window.removeEventListener('resize', resize);
		myChart.dispose();
	});

	// 暴露生成的echarts实例
	return {
		myChart
	};
};
