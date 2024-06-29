<template>
	<el-card shadow="hover" class="h-full">
		<template #header>
			<span>基本表格示例</span>
		</template>
		<div class="h-full flex-col">
			<SoTable ref="SoTableRef" height="100%" :column-list="columns" :table-data></SoTable>
			<!-- <Pagination
			v-show="total"
			v-model:currentPage="queryparams.pageNum"
			v-model:pageSize="queryparams.pageSize"
			:total="total"
			@get-list="getList" /> -->
		</div>
	</el-card>
</template>

<script setup lang="ts">
	import { ColumnProps } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	const sexOptions = reactive([
		{
			dictLabel: '男',
			dictValue: 'male'
		},
		{
			dictLabel: '女',
			dictValue: 'female'
		}
	]);
	const statusOptions = reactive([
		{
			dictLabel: '正常',
			dictValue: 0
		},
		{
			dictLabel: '禁用',
			dictValue: 1
		}
	]);

	const columns = reactive<ColumnProps<User>[]>([
		{
			type: 'index',
			label: '序号',
			width: '55'
		},
		{
			prop: 'username',
			label: '用户名',
			overflowConfig: {
				initiate: true
			}
		},
		{
			prop: 'nickname',
			label: '昵称'
		},
		{
			prop: 'sex',
			label: '性别',
			dictConfig: {
				options: () => sexOptions
			}
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
			label: '状态',
			tagConfig: {
				initiate: true
			},
			dictConfig: {
				options: () => statusOptions
			}
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
