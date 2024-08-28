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
				<ElButton type="primary" link onClick={() => handleTsxRender('表头')}>
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

	const queryParams = reactive({
		pageNum: 1,
		pageSize: 10
	});

	// 获取数据
	const loading = ref(false);
	const total = ref(0);
	const getList = async () => {
		loading.value = true;
		const res = await getUserList(queryParams);
		tableData.value = res.data;
		total.value = res.total!;
		loading.value = false;
	};

	onMounted(() => {
		getList();
	});
</script>

<template>
	<SoCard title="基础表格示例" class="h-full">
		<div class="flex-col overflow-hidden">
			<el-alert
				:closable="false"
				title="基于el-table表格的二次封装"
				type="info"
				description="采用h函数或tsx语法对列渲染进行封装，兼容el-table全部属性及API，并进行了一定自定义拓展，具有完整类型提示， 列配置可选择插槽方式或tsx渲染，高度灵活，表格都默认设置rowKey，优化表格渲染。" />
			<SoTable
				v-model:currentPage="queryParams.pageNum"
				v-model:pageSize="queryParams.pageSize"
				v-loading="loading"
				height="100%"
				:column-list="columns"
				:table-data
				:table-tool="false"
				:pageProps="{
					total
				}"
				@refresh="getList">
				<template #usernameHeader>
					<el-button type="primary" link @click="handleSlotRender('表头')">用户名</el-button>
				</template>
				<template #username="{ row }">
					<el-button type="primary" link @click="handleSlotRender('内容')">{{ row.username }}</el-button>
				</template>
			</SoTable>
		</div>
	</SoCard>
</template>
