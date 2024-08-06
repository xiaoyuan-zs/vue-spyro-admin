import type { ECOption } from '@/plugins';

export const useEchart03 = () => {
	const option: ECOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			show: false,
			left: '78%',
			top: '8%',
			data: ['实际', '计划']
		},
		xAxis: {
			data: ['1月', '2月', '3月', '4月', '5月', '6月']
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: false
			},
			axisLine: {
				show: true
			},
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			}
		},
		series: [
			{
				name: '实际',
				type: 'bar',
				stack: '总量',
				barMaxWidth: 35,
				barGap: '10%',
				itemStyle: {
					color: '#5087EC'
				},
				data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484]
			},
			{
				name: '计划',
				type: 'line',
				symbolSize: 10,
				symbol: 'circle',
				itemStyle: {
					color: '#68BBC4'
				},
				data: [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865]
			}
		]
	};
	return {
		option03: option
	};
};
