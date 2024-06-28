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
						<el-icon><DCaret /></el-icon>
					</el-tag>
				</template>
				<template #header="scope">
					<component :is="column.headerRenderer" v-bind="scope" v-if="column.headerRenderer" />
					<slot v-else :name="`${column.type}Header`" v-bind="scope"></slot>
				</template>
			</el-table-column>
			<SoTableColumn />
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

<script setup lang="tsx">
	import { ElTable, ElTableColumn } from 'element-plus';
	import { ColumnProps } from '@/components/SoTable';
	const props = withDefaults(
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

	// 渲染表格列
	const SoTableColumn = defineComponent({
		name: 'SoTableColumn',
		render() {
			return h(ElTableColumn, {});
		}
	});
</script>
