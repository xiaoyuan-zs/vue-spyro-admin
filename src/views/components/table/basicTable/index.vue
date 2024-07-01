<script setup lang="tsx">
	import { ElButton } from 'element-plus';
	import { ColumnProps } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	defineOptions({
		name: 'BasicTable'
	});

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
			label: '昵称',
			renderer: ({ row }) => (
				<ElButton type="primary" link onClick={() => handleTsxRender('内容')}>
					{row.nickname}
				</ElButton>
			),
			headerRenderer: () => (
				<ElButton type="primary" onClick={() => handleTsxRender('表头')}>
					昵称
				</ElButton>
			)
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
	// 表格数据
	const tableData = ref<User[]>([]);

	const handleSlotRender = (type: string) => {
		ElMessage.success(`我是作用域插槽渲染的${type}`);
	};
	const handleTsxRender = (type: string) => {
		ElMessage.success(`我是TSX渲染的${type}`);
	};

	const handleUpdate = () => {
		ElMessage.success(`仅供预览展示`);
	};
	const handleDelete = () => {
		ElMessage.success(`仅供预览展示`);
	};

	// 获取数据
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

<template>
	<el-card shadow="hover" class="h-full">
		<div class="h-full flex-col">
			<h2 class="mb-4 underline underline-offset-8 decoration-2 hover:decoration-sky-500 duration-200 flex items-center">
				<span>基本表格示例</span>
				<el-tooltip effect="dark" content="基于 ElementPlus 的 Table 组件进行二次封装" placement="top">
					<Icon name="ep:info-filled" class="cursor-pointer ml-2" />
				</el-tooltip>
			</h2>
			<SoTable ref="SoTableRef" class="flex-1" height="100%" v-loading="loading" :column-list="columns" :table-data>
				<template #usernameHeader>
					<el-button type="primary" @click="handleSlotRender('表头')">用户名</el-button>
				</template>
				<template #username="{ row }">
					<el-button type="primary" link @click="handleSlotRender('内容')">{{ row.username }}</el-button>
				</template>
			</SoTable>
			<Pagination
				v-show="total"
				v-model:currentPage="queryparams.pageNum"
				v-model:pageSize="queryparams.pageSize"
				:total="total"
				@get-list="getList" />
		</div>
	</el-card>
</template>
