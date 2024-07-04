<script setup lang="tsx" name="UseTable">
	import { ElButton } from 'element-plus';
	import { ColumnProps, useTable } from '@/components/SoTable';
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
			type: 'selection',
			width: '55'
		},
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
		},
		{
			prop: 'operation',
			label: '操作',
			renderer: () => (
				<>
					<ElButton type="primary" link onClick={handleUpdate}>
						修改
					</ElButton>
					<ElButton type="primary" link onClick={handleDelete}>
						删除
					</ElButton>
				</>
			)
		}
	]);
	const queryParams = reactive({
		pageNum: 1,
		pageSize: 10
	});

	const { tableState, tableMethods, tableMount } = useTable({
		fetchApi: async () => {
			const { data, total = 0 } = await getUserList(queryParams);
			return { data, total };
		}
	});
	const { loading } = toRefs(tableState);
	const { setProps, addColumn, delColumn, delData, refresh } = tableMethods;

	const handleUpdate = () => {
		ElMessage.success(`仅供预览展示`);
	};
	const handleDelete = () => {
		ElMessage.success(`仅供预览展示`);
	};
	onMounted(() => {
		setProps({
			columnList: columns
		});
	});
</script>

<template>
	<div class="h-full flex-col">
		<el-card shadow="hover">
			<h2 class="mb-4 underline underline-offset-8 decoration-2 hover:decoration-sky-500 duration-200 flex items-center">
				<span>useTable操作</span>
			</h2>
			<div>
				<el-button>显示分页</el-button>
				<el-button>隐藏分页</el-button>
				<el-button>显示分页</el-button>
				<el-button>显示/隐藏展开行</el-button>
				<el-button></el-button>
				<el-button>隐藏分页</el-button>
			</div>
		</el-card>
		<el-card shadow="hover" class="flex-1 mt-4">
			<h2 class="mb-4 underline underline-offset-8 decoration-2 hover:decoration-sky-500 duration-200 flex items-center">
				<span>useTable示例</span>
			</h2>
			<SoTable
				ref="tableRef"
				height="100%"
				v-model:currentPage="queryParams.pageNum"
				v-model:pageSize="queryParams.pageSize"
				v-loading="loading!"
				@refresh="refresh"
				@mount="tableMount" />
		</el-card>
	</div>
</template>
