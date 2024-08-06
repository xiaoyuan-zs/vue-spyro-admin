import type { ECOption } from '@/plugins';

export const useEchart04 = () => {
	const option: ECOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			show: true,
			left: '78%',
			top: '8%',
			data: ['数量']
		},
		xAxis: {
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
				name: '数量',
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
		option04: option
	};
};
