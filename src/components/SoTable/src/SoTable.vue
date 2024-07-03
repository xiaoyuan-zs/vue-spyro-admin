<script setup lang="tsx">
	import { PropType } from 'vue';
	import { ElTable, ElTableColumn, ElTag } from 'element-plus';
	import { ColumnProps, ContentRendererType, HeaderRendererType } from '@/components/SoTable';
	import { SoToolTip } from '@/components/SoToolTip';
	import { PageProps } from '@/components/Pagination';
	import { selectDictLabel } from '@spyro/utils';

	const props = withDefaults(
		defineProps<{
			tableData: any[];
			columnList: ColumnProps[];
			rowKey?: string;
			height?: string;
			maxHeight?: string;
			border?: boolean;
			pagination?: boolean;
			pageProps?: PageProps;
		}>(),
		{
			border: true,
			rowKey: 'id',
			pagination: true
		}
	);

	// 是否显示分页插件
	const pageVisible = computed(() => props.pagination && props.pageProps?.total! > 0);
	// 分页
	const currentPage = defineModel('currentPage', { type: Number });
	const pageSize = defineModel('pageSize', { type: Number });
	const emit = defineEmits<{
		(event: 'refresh'): void;
	}>();
	// 刷新表格数据
	const refresh = () => emit('refresh');

	// 表格实例
	const tableRef = ref<InstanceType<typeof ElTable>>();

	// 处理TableColumn
	const slots = defineSlots();
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

	// const renderColumn = (column: ColumnProps) => {
	// 	return h(
	// 		ElTableColumn,
	// 		{
	// 			...column
	// 		},
	// 		{
	// 			default: (scope: ContentRendererType<any>) => {
	// 				if (column.renderer) return column.renderer(scope);
	// 				if (slots[column.prop!]) return slots[column.prop!](scope);
	// 				if (column.children?.length) return column.children.map((item) => renderColumn(item));
	// 				const dictFormatter = selectDictLabel(
	// 					(column.dictConfig?.options && column.dictConfig?.options()) || [],
	// 					scope.row[column.prop!],
	// 					column.dictConfig?.value,
	// 					column.dictConfig?.label
	// 				);
	// 				if (column.tagConfig?.initiate) return h(ElTag, { type: column.tagConfig.type ?? 'primary' }, () => dictFormatter);
	// 				return column.overflowConfig?.initiate
	// 					? h(SoToolTip, {
	// 							textColor: column.overflowConfig?.color,
	// 							popoverWidth: column.overflowConfig?.width,
	// 							lineClamp: column.overflowConfig?.line,
	// 							content: dictFormatter
	// 						})
	// 					: dictFormatter;
	// 			},
	// 			header: (scope: HeaderRendererType<any>) => {
	// 				if (column.headerRenderer) return column.headerRenderer(scope);
	// 				if (slots[`${column.prop!}Header`]) return slots[`${column.prop!}Header`](scope);
	// 				return column.label;
	// 			}
	// 		}
	// 	);
	// };

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
</script>

<template>
	<div class="flex-col h-full overflow-hidden">
		<!-- flex布局默认min-height/min-weight:auto，导致子元素min-height为子元素的height，撑大了父元素 -->
		<!-- 使用 overflow-hidden 或 min-h-0 解决子元素高度超出父元素高度问题 -->
		<el-table
			ref="tableRef"
			class="flex-1"
			border
			v-bind="$attrs"
			:data="tableData"
			:row-key="rowKey"
			:height="height"
			:max-height="maxHeight"
			:cell-style="{ height: '63px' }">
			<template v-for="column in columnList" :key="column.type || column.prop">
				<el-table-column
					v-if="column.type"
					v-bind="column"
					:align="column.align ?? 'center'"
					:reserve-selection="column.type === 'selection'">
					<template #default="scope">
						<template v-if="column.type === 'expand'">
							<component :is="column.renderer" v-bind="scope" v-if="column.renderer" />
							<slot v-else :name="column.type" v-bind="scope"></slot>
						</template>
						<!-- 拖拽排序 -->
						<el-tag v-if="column.type === 'sortable'">
							<Icon name="ep:d-caret" />
						</el-tag>
					</template>
					<template #header="scope">
						<component :is="column.headerRenderer" v-bind="scope" v-if="column.headerRenderer" />
						<slot v-else :name="`${column.type}Header`" v-bind="scope"></slot>
					</template>
				</el-table-column>
				<SoTableColumn v-if="!column.type && column.prop" :column />
			</template>
			<!-- 默认插槽 支持el-table 的columns -->
			<slot />
			<!-- append -->
			<template #append>
				<slot name="append"></slot>
			</template>
			<!-- empty -->
			<template #empty>
				<el-empty description="暂无数据" />
			</template>
		</el-table>
		<Pagination v-show="pageVisible" v-model:currentPage="currentPage" v-model:pageSize="pageSize" v-bind="pageProps" @get-list="refresh" />
	</div>
</template>
