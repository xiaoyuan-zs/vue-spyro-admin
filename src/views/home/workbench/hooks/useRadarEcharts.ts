import echarts, { type ECOption } from '@/plugins/echarts';

export const useRadarEcharts = () => {
	const radarEcharts = ref<HTMLDivElement>();
	const radarOptions = ref<ECOption>({
		title: {
			// text: 'Basic Radar Chart'
		},
		tooltip: {
			show: true,
			trigger: 'item',
			position: 'right'
		},
		radar: {
			// 雷达区域分割颜色
			// splitArea: {
			//     areaStyle: {
			//         color: ['rgba(201, 223, 255, 0.15)', 'rgba(201, 223, 255, 0.95)'].reverse()
			//     }
			// },
			indicator: [
				{ name: '前端开发', min: 0, max: 20 },
				{ name: '后端开发', min: 0, max: 20 },
				{ name: '产品经理', min: 0, max: 20 },
				{ name: 'UI设计', min: 0, max: 20 },
				{ name: '测试', min: 0, max: 20 }
			]
		},
		series: [
			{
				name: '岗位',
				type: 'radar',
				symbol: 'circle',
				symbolSize: 6,
				itemStyle: {
					borderColor: 'rgba(108,254,255, 0.6)',
					color: '#fff',
					borderWidth: 1
				},
				lineStyle: {
					color: 'rgba(108,254,255, 0.6)'
				},
				areaStyle: {
					// 单项区域填充样式
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: 'rgba(108,254,255, 0.6)'
							},
							{
								offset: 1,
								color: 'rgba(255,255,255, 0.65)'
							}
						],
						false
					),
					// opacity:0.75, // 区域透明度
					// 设置扇形的阴影
					shadowBlur: 12,
					shadowColor: 'rgba(108,254,255, 0.5)',
					shadowOffsetX: 6,
					shadowOffsetY: 6
				},
				data: [
					{
						value: [10, 19, 5, 3, 3]
					}
				]
			}
		]
	});

	return {
		radarEcharts,
		radarOptions
	};
};
