export const useEchart03 = () => {
	const option = {
		tooltip: {},
		legend: {
			show: true,
			data: ['实际', '计划']
		},
		xAxis: {
			data: ['钢筋', '混泥土', '水泥', '沙浆', '玻璃', '模板', '铝板', '石材', '砂石料', '型钢', '其他']
		},
		yAxis: {
			axisLine: {
				show: true
			}
		},
		series: []
	};
	return {
		option01: option
	};
};
