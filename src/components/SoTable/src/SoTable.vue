<script setup lang="tsx">
	import { PropType } from 'vue';
	import { ElTable, ElTableColumn, ElTag } from 'element-plus';
	import { ColumnProps, ContentRendererType, HeaderRendererType } from '@/components/SoTable';
	import { SoToolTip } from '@/components/SoToolTip';
	import { selectDictLabel } from '@spyro/utils';

	withDefaults(
		defineProps<{
			tableData: any[];
			columnList: ColumnProps[];
			rowKey?: string;
			border?: boolean;
		}>(),
		{
			border: true,
			rowKey: 'id'
		}
	);

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
	<el-table
		ref="tableRef"
		border
		v-bind="$attrs"
		:data="tableData"
		:column-list="columnList"
		:row-key="rowKey"
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
</template>
