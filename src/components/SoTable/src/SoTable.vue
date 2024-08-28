<script setup lang="tsx">
	import { PropType } from 'vue';
	import { ElTable, ElTableColumn, ElTag, TableProps as ElTableProps } from 'element-plus';
	import { ColumnProps, ContentRendererType, HeaderRendererType } from '@/components/SoTable';
	import type { PageProps } from '@/components/SoPagination';
	import { SoToolTip } from '@/components/SoToolTip';
	import { SoTableTool } from '@/components/SoTableTool';
	import { selectDictLabel, nanoid } from '@spyro/utils';
	import { useDraggable } from 'vue-draggable-plus';

	// SoTable Props Type
	interface Props {
		tableData?: any[];
		columnList?: ColumnProps[];
		rowKey?: string;
		height?: string | number;
		maxHeight?: string | number;
		border?: boolean;
		pagination?: boolean;
		pageProps?: PageProps;
		tableTool?: boolean;
	}
	// SoTable and ElTable Props Type
	export interface TableProps extends Props, Partial<Omit<ElTableProps<any>, 'data' | 'rowKey' | 'cellStyle'>> {}

	// 3.4+ 版本 defineProps 暂不支持外文件类型导入
	const props = withDefaults(defineProps<Props>(), {
		tableData: () => [],
		columnList: () => [],
		border: true,
		rowKey: 'id',
		pagination: true,
		tableTool: true
	});

	const emit = defineEmits<{
		(event: 'refresh'): void;
		(event: 'mount', params: any): void;
		(event: 'dragSort', { newIndex, oldIndex }: { newIndex?: number; oldIndex?: number }): void;
	}>();

	const slots = defineSlots();
	const attrs = useAttrs();

	// 表格实例
	const tableRef = ref<InstanceType<typeof ElTable>>();
	// 合并setProps传递的Props
	const mergeProps = ref<TableProps>({});
	// 表格唯一标识
	const uuid = ref('id-' + nanoid());

	// 分页
	const currentPage = defineModel('currentPage', { type: Number });
	const pageSize = defineModel('pageSize', { type: Number });
	// 显示隐藏搜索栏
	const showSearch = defineModel('showSearch', { type: Boolean });

	// 合并setProps传递的props 和 父组件传递的 props
	const allProps = computed(() => {
		const obj = { ...props };
		Object.assign(obj, unref(mergeProps));
		return obj;
	});

	// 表格列
	const columns = computed(() => {
		unref(allProps).columnList.forEach((col) => {
			col.visible = col.visible ?? true;
		});
		return unref(allProps).columnList;
	});

	// 是否显示分页插件
	const pageVisible = computed(() => {
		const { pagination, pageProps } = unref(allProps);
		return pagination && pageProps?.total! > 0;
	});
	// 去除el-table不需要的 props
	const bindValue = computed(() => {
		const obj: Record<string, any> = { cellStyle: { height: '63px' }, ...attrs, ...unref(allProps) };
		delete obj.tableData;
		delete obj.columnList;
		delete obj.pageProps;
		delete obj.pagination;
		return obj;
	});

	// 设置 props
	const setProps = (tableProp: TableProps = {}) => {
		mergeProps.value = Object.assign(unref(mergeProps), tableProp);
	};

	// 添加列
	const addColumn = (column: ColumnProps, index?: number) => {
		const { columnList } = unref(allProps);
		const exitIndex = columnList.findIndex((el) => {
			if (el.prop) return el.prop === column.prop;
			if (el.type) return el.type === column.type;
		});
		if (exitIndex > -1) return;
		index !== void 0 ? columnList.splice(index, 0, column) : columnList.push(column);
	};

	// 删除列
	const delColumn = (prop: string) => {
		const { columnList } = unref(allProps);
		const index = columnList.findIndex((el) => el.prop === prop || el.type === prop);
		if (index > -1) columnList.splice(index, 1);
	};

	// 刷新表格数据
	const refresh = () => emit('refresh');

	// 拖拽
	const dragSort = () => {
		useDraggable(`#${uuid.value} tbody`, ref(unref(allProps).tableData), {
			animation: 200,
			handle: '.move',
			ghostClass: 'ghost',
			onUpdate: ({ newIndex, oldIndex }) => {
				const [data] = unref(allProps).tableData.splice(oldIndex!, 1);
				unref(allProps).tableData.splice(newIndex!, 0, data);
				emit('dragSort', { newIndex, oldIndex });
			}
		});
	};

	// 处理renderColumn
	const renderColumn = (column: ColumnProps) => (
		<ElTableColumn {...column} align={column.align ?? 'center'}>
			{{
				default: (scope: ContentRendererType<any>) => {
					if (column.renderer) return column.renderer(scope);
					if (slots[column.prop!]) return slots[column.prop!](scope);
					if (column.children?.length) return column.children.map((item) => renderColumn(item));
					const dictFormatter = selectDictLabel(
						(column.dictConfig?.options && column.dictConfig?.options()) || [],
						scope.row[column.prop!],
						column.dictConfig?.value,
						column.dictConfig?.label
					);
					if (column.tagConfig?.initiate) return <ElTag type={column.tagConfig.type ?? 'primary'}>{dictFormatter}</ElTag>;
					return (
						<>
							{column.overflowConfig?.initiate ? (
								<SoToolTip
									textColor={column.overflowConfig.color}
									popoverWidth={column.overflowConfig.width}
									lineClamp={column.overflowConfig.line}
									content={dictFormatter}
								/>
							) : (
								dictFormatter
							)}
						</>
					);
				},
				header: (scope: HeaderRendererType<any>) => {
					if (column.headerRenderer) return column.headerRenderer(scope);
					if (slots[`${column.prop!}Header`]) return slots[`${column.prop!}Header`](scope);
					return column.label;
				}
			}}
		</ElTableColumn>
	);
	// 渲染表格列
	const SoTableColumn = defineComponent({
		name: 'SoTableColumn',
		props: {
			column: {
				type: Object as PropType<ColumnProps>,
				required: true
			}
		},
		setup({ column }) {
			return () => renderColumn(column);
		}
	});

	watch(
		() => unref(allProps).tableData,
		(newVal) => {
			// 需要等待数据返回之后，在调用拖拽，否则在无数据之前调用拖拽无效果
			if (newVal) dragSort();
		}
	);

	onMounted(() => {
		// 初始化完成表格挂载
		emit('mount', {
			soRef: unref(tableRef)?.$parent,
			elRef: unref(tableRef)
		});
	});

	defineExpose({
		setProps,
		addColumn,
		delColumn
	});
</script>

<template>
	<div class="flex-col h-full overflow-hidden">
		<!-- 表格工具栏 -->
		<el-row justify="space-between" class="mb-2">
			<el-col :span="1.5">
				<slot name="operation" />
			</el-col>
			<template v-if="allProps.tableTool">
				<SoTableTool v-model:show-search="showSearch" :columns="columns" @refresh="refresh" />
			</template>
		</el-row>
		<!-- flex布局默认min-height/min-weight:auto，导致子元素min-height为子元素的height，撑大了父元素 -->
		<!-- 使用 overflow-hidden 或 min-h-0 解决子元素高度超出父元素高度问题 -->
		<el-table :id="uuid" ref="tableRef" class="flex-1" :data="allProps.tableData" v-bind="bindValue">
			<template v-for="(column, index) in columns" :key="column">
				<el-table-column
					v-if="column.type && column.visible"
					v-bind="column"
					:align="column.align ?? 'center'"
					:reserve-selection="column.type === 'selection'">
					<template #default="scope">
						<template v-if="column.type === 'expand'">
							<component :is="column.renderer" v-bind="scope" v-if="column.renderer" />
							<slot v-else :name="column.type" v-bind="scope" />
						</template>
						<!-- 拖拽排序 -->
						<el-tag v-if="column.type === 'sortable'" class="move cursor-move">
							<Icon name="ep:d-caret" class="cursor-move!" />
						</el-tag>
					</template>
					<template #header="scope">
						<component :is="column.headerRenderer" v-bind="scope" v-if="column.headerRenderer" />
						<slot v-else :name="`${column.type}Header`" v-bind="scope" />
					</template>
				</el-table-column>
				<SoTableColumn v-if="!column.type && column.prop && column.visible" :column="{ ...column, index }" />
			</template>
			<!-- 默认插槽 支持el-table 的columns -->
			<slot />
			<!-- append -->
			<template #append>
				<slot name="append" />
			</template>
			<!-- empty -->
			<template #empty>
				<el-empty description="暂无数据" />
			</template>
		</el-table>
		<SoPagination
			v-show="pageVisible"
			v-model:currentPage="currentPage"
			v-model:pageSize="pageSize"
			v-bind="allProps.pageProps"
			@get-list="refresh" />
	</div>
</template>
