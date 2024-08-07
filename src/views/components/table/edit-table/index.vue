<script setup lang="ts">
	defineOptions({
		name: 'EditTable'
	});

	const activeName = ref<keyof typeof columnProp>('singleEdit');
	const tabOptions = reactive([
		{
			label: '单元格/单行编辑',
			name: 'singleEdit'
		},
		{
			label: '整体编辑',
			name: 'overallEdit'
		},
		{
			label: '表单表格(普通校验)',
			name: 'verifyEdit'
		},
		{
			label: '表单表格(条件校验)',
			name: 'conditionVerifyEdit'
		}
	]);

	// 具体的列
	const columnProp = {
		singleEdit: defineAsyncComponent(() => import('./components/SingleEdit.vue')),
		overallEdit: defineAsyncComponent(() => import('./components/OverallEdit.vue')),
		verifyEdit: defineAsyncComponent(() => import('./components/VerifyEdit.vue')),
		conditionVerifyEdit: defineAsyncComponent(() => import('./components/ConditionVerifyEdit.vue'))
	};
</script>

<template>
	<so-card title="树形表格示例" class="h-full">
		<div class="h-full flex-col overflow-hidden">
			<el-alert
				:closable="false"
				title="表格搭配表单的可编辑用法"
				type="info"
				description="采用hook搭配TSX语法的方式对列进行配置，可编辑表格都需要设置rowKey。" />
			<el-tabs v-model="activeName">
				<el-tab-pane v-for="el in tabOptions" :key="el.name" :label="el.label" :name="el.name" />
			</el-tabs>
			<component :is="columnProp[activeName]" />
		</div>
	</so-card>
</template>
