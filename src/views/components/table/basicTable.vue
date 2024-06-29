<template>
	<el-card shadow="hover" class="h-full">
		<div class="h-full flex-col">
			<h2 class="my-4 underline underline-offset-8 decoration-2">基本表格示例</h2>
			<div class="mb-4">
				<el-button>分页开启</el-button>
				<el-button>分页关闭</el-button>
			</div>
			<SoTable ref="SoTableRef" class="flex-1" height="100%" v-loading="loading" :column-list="columns" :table-data></SoTable>
			<Pagination
				v-show="total"
				v-model:currentPage="queryparams.pageNum"
				v-model:pageSize="queryparams.pageSize"
				:total="total"
				@get-list="getList" />
		</div>
	</el-card>
</template>

<script setup lang="ts">
	import { ColumnProps } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	// 性别字典
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
	// 状态字典
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

	// 表格列
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
	// 表格数据
	const tableData = ref<User[]>([]);

	const queryparams = reactive({
		pageNum: 1,
		pageSize: 10
	});
	const total = ref(0);
	const loading = ref(false);
	const getList = async () => {
		loading.value = true;
		const res = await getUserList(queryparams);
		tableData.value = res.data;
		total.value = res.total!;
		loading.value = false;
	};

	onMounted(() => {
		getList();
	});
</script>
