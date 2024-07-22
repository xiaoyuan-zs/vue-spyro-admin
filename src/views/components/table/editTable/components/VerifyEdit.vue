<script setup lang="ts">
	import { useVerifyEdit } from '../hooks';
	import { SoTable, useTable } from '@/components/SoTable';
	import VueJsonPretty from 'vue-json-pretty';
	import 'vue-json-pretty/lib/styles.css';
	import { unref } from 'vue';

	const tableData = ref<any>([]);

	const { tableMethods, tableMount } = useTable({
		immediate: false
	});
	const { setProps, refresh } = tableMethods;

	const { columnProp } = useVerifyEdit();

	const initTable = (prop: typeof columnProp) => {
		setProps({
			rowKey: 'userId',
			columnList: prop.columns,
			tableData: prop.data
		});
		tableData.value = prop.data;
	};

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
			<SoTable height="100%" :tableTool="false" @refresh="refresh" @mount="tableMount" />
		</el-form>
	</div>
</template>
