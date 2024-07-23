<script setup lang="ts">
	import { useConditionVerifyEdit } from '../hooks';
	import { SoTable, useTable } from '@/components/SoTable';
	import VueJsonPretty from 'vue-json-pretty';
	import 'vue-json-pretty/lib/styles.css';
	import { unref } from 'vue';

	const tableData = ref<any>([]);

	const { tableMethods, tableMount } = useTable({
		immediate: false
	});
	const { setProps, refresh } = tableMethods;

	const { columnProp } = useConditionVerifyEdit();

	const initTable = (prop: typeof columnProp) => {
		setProps({
			rowKey: 'userId',
			columnList: prop.columns,
			tableData: prop.data
		});
		tableData.value = prop.data;
	};

	// 通过计算属性 过滤出表头插槽名称
	const headerSlots = computed(() =>
		columnProp.columns.map((el) => {
			if (el.prop) return el.prop + 'Header';
		})
	);

	onMounted(() => {
		initTable(columnProp);
	});
</script>

<template>
	<div class="flex-1 flex overflow-hidden">
		<div class="w-60 h-full mr-4">
			<el-scrollbar>
				<VueJsonPretty :data="unref(tableData)" :showLine="false" :showDoubleQuotes="false" />
			</el-scrollbar>
		</div>
		<el-form class="flex-1" :model="columnProp">
			<SoTable height="100%" :tableTool="false" @refresh="refresh" @mount="tableMount">
				<template v-for="item in headerSlots" :key="item" #[item!]="{ column }">
					<span class="text-red">*</span>
					<span>{{ column.label }}</span>
				</template>
			</SoTable>
		</el-form>
	</div>
</template>
