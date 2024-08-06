import type { ECOption } from '@/plugins';

export const useEchart01 = () => {
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
			data: ['实际', '计划']
		},
		xAxis: {
			data: ['钢筋', '混泥土', '水泥', '沙浆', '玻璃', '模板', '铝板', '石材', '砂石料', '型钢', '其他']
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
					color: '#68BBC4'
					// normal: {
					// 	color: '#68BBC4'
					// label: {
					// 	show: true,
					// 	textStyle: {
					// 		color: '#fff'
					// 	},
					// 	position: 'inside',
					// 	formatter: function (p) {
					// 		return p.value > 0 ? p.value : '';
					// 	}
					// }
					// }
				},
				data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484]
			},
			{
				name: '计划',
				type: 'bar',
				stack: '总量',
				itemStyle: {
					color: '#5087EC'
				},
				data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381]
			}
		]
	};
	return {
		option01: option
	};
};
