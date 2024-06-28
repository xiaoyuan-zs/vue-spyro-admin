import type { TableColumnCtx } from 'element-plus';

// 自定义拓展表格列类型
export type ColumnType = 'index' | 'selection' | 'sortable' | 'expand';

// 头部插槽类型
export interface HeaderRendererType<T> {
	$index: number;
	column: TableColumnCtx<T>;
	[key: string]: any;
}

// 单元格内容插槽类型
export interface ContentRendererType<T> extends HeaderRendererType<T> {
	row: T;
}

export interface ColumnProps<T = any>
	extends Partial<Omit<TableColumnCtx<T>, 'type' | 'prop' | 'children' | 'renderCell' | 'renderHeader'>> {
	type?: ColumnType; // 列的类型
	prop?: keyof T & string;
	visible?: boolean; // 是否显示该列
	tag?: boolean; // 标签显示
	// 字段配置
	dictionary?: {
		value?: string; // 字典回显值字段
		label?: string; // 字典回显标签字段
		options?: any[]; // 字典，用于回显单元格内容
	};
	// popover悬浮展示配置
	overflowTooltip?: {
		initiate?: boolean; // 是否开启悬浮展示
		line?: number; // 展示行数
		color?: string; // 文字颜色
		width?: number; // 悬浮展示宽度
	};
	headerRenderer?: (scope: HeaderRendererType<T>) => VNode; // 自定义渲染头部内容
	renderer?: (scope: ContentRendererType<T>) => VNode; // 自定义渲染单元格内容
	children?: Array<ColumnProps<T>>; // 多级表头
}
