import * as echarts from 'echarts/core';

// 引入用到的图表
import {
	LineChart,
	BarChart,
	PieChart,
	RadarChart,
	MapChart,
	type LineSeriesOption,
	type PieSeriesOption,
	type BarSeriesOption,
	type RadarSeriesOption,
	type MapSeriesOption
} from 'echarts/charts';

// 引入提示框、数据集等组件
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	TransformComponent,
	RadarComponent,
	type TooltipComponentOption,
	type RadarComponentOption,
	type TitleComponentOption,
	type LegendComponentOption,
	type GridComponentOption
} from 'echarts/components';

// 引入标签自动布局、全局过度动画等特性
import { LabelLayout } from 'echarts/features';

// 引入echarts的 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers';

import type { ComposeOption } from 'echarts/core';

// 通过ComposeOption 暴露出一个含有必须图表和组件的option类型
export type ECOption = ComposeOption<
	| LineSeriesOption
	| PieSeriesOption
	| BarSeriesOption
	| RadarSeriesOption
	| MapSeriesOption
	| TooltipComponentOption
	| TitleComponentOption
	| LegendComponentOption
	| GridComponentOption
	| RadarComponentOption
>;

// 注册必须的组件
echarts.use([
	LineChart,
	RadarChart,
	BarChart,
	PieChart,
	MapChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	RadarComponent,
	LegendComponent,
	TransformComponent,
	LabelLayout,
	CanvasRenderer
]);

export { echarts };
