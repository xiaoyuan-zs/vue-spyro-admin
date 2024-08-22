<script setup lang="ts">
	export interface PageProps {
		small?: boolean;
		disabled?: boolean;
		background?: boolean;
		layout?: string;
		total?: number;
		pageSizes?: number[];
	}

	withDefaults(defineProps<PageProps>(), {
		small: false,
		disabled: false,
		background: true,
		total: 0,
		layout: '->, total, sizes, prev, pager, next, jumper ',
		pageSizes: () => [10, 20, 30, 40]
	});

	const emit = defineEmits<{
		(event: 'getList'): void;
	}>();

	// V3.4+ 支持 defineModel 宏功能， 之前版本请使用 props + 计算属性实现
	const currentPage = defineModel('currentPage', { type: Number, default: 1 });
	const pageSize = defineModel('pageSize', { type: Number, default: 10 });

	const handleSizeChange = (val: number) => {
		pageSize.value = val;
		handleCurrentChange(1);
	};

	const handleCurrentChange = (val: number) => {
		currentPage.value = val;
		emit('getList');
	};
</script>

<template>
	<el-pagination
		v-model:current-page="currentPage"
		v-model:page-size="pageSize"
		class="pt-4"
		:page-sizes="pageSizes"
		:small="small"
		:disabled="disabled"
		:background="background"
		:layout="layout"
		:total="total"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange" />
</template>
