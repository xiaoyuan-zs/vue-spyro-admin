import { echarts, type ECOption } from '@/plugins';

export const useBarEcharts = () => {
	const barEcharts = ref<HTMLDivElement>();
	const barOptions = ref<ECOption>({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '总内容量',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				showSymbol: true, // 只有在 tooltip hover 的时候显示
				symbolSize: 5,
				label: {
					show: true
				},
				// 折线拐点标志的样式。
				itemStyle: {
					color: 'rgba(0,144,255, 0.8)'
				},
				lineStyle: {
					color: 'rgba(54,206,158, 0.8)'
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: 'rgba(173,235,216, 0.8)'
							},
							{
								offset: 1,
								color: 'rgba(198,230,255, 0.6)'
							}
						],
						false
					),
					shadowColor: 'rgba(198,230,255, 0.5)',
					shadowBlur: 10
				},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			}
		]
	});

	return {
		barEcharts,
		barOptions
	};
};
