<template>
	<el-card shadow="hover">
		<template #header>
			<span>基本表格示例</span>
		</template>
		<SoTable ref="SoTableRef" height="100%" :column-list="columns" :table-data />
	</el-card>
</template>

<script setup lang="ts">
	import { ColumnProps } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	const columns = reactive<ColumnProps<User>[]>([
		{
			type: 'index',
			label: '序号',
			width: '50'
		},
		{
			prop: 'username',
			label: '用户名'
		},
		{
			prop: 'nickname',
			label: '昵称'
		},
		{
			prop: 'sex',
			label: '性别'
		},
		{
			prop: 'phone',
			label: '手机号'
		},
		{
			prop: 'email',
			label: '邮箱'
		},
		{
			prop: 'status',
			label: '状态'
		}
	]);
	const tableData = ref<User[]>([]);

	const getList = async () => {
		const { data } = await getUserList();
		tableData.value = data;
	};

	onMounted(() => {
		getList();
	});
</script>
