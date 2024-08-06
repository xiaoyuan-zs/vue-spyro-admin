import type { ECOption } from '@/plugins';
export const useEchart02 = () => {
	const echartData = [
		{
			value: 2154,
			name: '零星物质'
		},
		{
			value: 3854,
			name: '资产'
		},
		{
			value: 3515,
			name: '专业分包'
		},
		{
			value: 3515,
			name: '钢筋'
		},
		{
			value: 3854,
			name: '混泥土'
		},
		{
			value: 2154,
			name: '劳务分包'
		},
		{
			value: 2154,
			name: '其他材料'
		}
	];
	const option: ECOption = {
		legend: {
			show: true,
			bottom: 0,
			left: 'center',
			data: echartData.map((el) => el.name)
		},
		tooltip: {
			show: true
		},
		series: [
			{
				type: 'pie',
				radius: ['42%', '50%'],
				color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4', '#f565b4'],
				data: echartData
			}
		]
	};
	return {
		option02: option
	};
};
