<script setup lang="tsx" name="UseTable">
	import { ElButton } from 'element-plus';
	import { ColumnProps, useTable } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	const showSearch = ref(true);

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
			label: '勾选',
			width: '55'
		},
		{
			type: 'expand',
			label: '展开',
			width: '55',
			renderer: ({ row }) => (
				<div class="block px-2">
					<el-text type="success">tsx渲染：{JSON.stringify(row)}</el-text>
				</div>
			)
		},
		{
			type: 'sortable',
			label: '排序',
			width: 80
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
	// 查询参数
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
	const { loading, data, total } = toRefs(tableState);
	const { setProps, addColumn, delColumn, getElTableInstance, refresh } = tableMethods;

	const handleUpdate = () => {
		ElMessage.success(`仅供预览展示`);
	};
	const handleDelete = () => {
		ElMessage.success(`仅供预览展示`);
	};

	// 显示隐藏分页
	const handlePage = (flag: boolean) => {
		setProps({
			pagination: flag
		});
	};

	// 显示隐藏多选
	const handleMultiSelect = (flag: boolean) => {
		flag
			? addColumn(
					{
						type: 'selection',
						width: '55',
						label: '勾选'
					},
					0
				)
			: delColumn('selection');
	};

	// 展开行必须绑定rowKey
	// 显示隐藏展开行
	let expand = ref(false);
	const toggleExpandRow = async () => {
		expand.value = !expand.value;
		const elTableRef = await getElTableInstance();
		data.value.forEach((el) => {
			elTableRef?.toggleRowExpansion(el, expand.value);
		});
	};

	// 显示隐藏全选
	const toggleAllSelect = async () => {
		const elTableRef = await getElTableInstance();
		elTableRef?.toggleAllSelection();
	};

	// 显示隐藏操作
	let operation = ref(true);
	const toggleOperation = () => {
		operation.value = !operation.value;
		operation.value
			? addColumn({
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
				})
			: delColumn('operation');
	};

	// 拖拽回调
	const dragSort = ({ newIndex, oldIndex }: { newIndex?: number; oldIndex?: number }) => {
		console.log('newIndex: ', newIndex);
		console.log('oldIndex: ', oldIndex);
		ElMessage.success('拖拽排序成功');
	};

	onMounted(() => {
		setProps({
			rowKey: 'userId',
			columnList: columns
		});
	});
</script>

<template>
	<div class="h-full flex-col gap-4">
		<SoCard v-show="showSearch" title="useTable 操作">
			<div>
				<el-alert
					:closable="false"
					title="基于基础表格封装useTable函数的高级用法"
					type="info"
					description="采用hook函数式搭配TSX语法的方式进行使用，配置高度灵活，表格都默认设置rowKey，优化表格渲染及保证树形、展开行、拖拽的正常功能。" />
				<div class="mt-3">
					<el-button @click="handlePage(true)">显示分页</el-button>
					<el-button @click="handlePage(false)">隐藏分页</el-button>
					<el-button @click="handleMultiSelect(true)">显示多选</el-button>
					<el-button @click="handleMultiSelect(false)">隐藏多选</el-button>
					<el-button @click="toggleExpandRow">显示/隐藏展开行</el-button>
					<el-button @click="toggleAllSelect">全选/全不选</el-button>
					<el-button @click="toggleOperation">添加/删除操作列</el-button>
				</div>
			</div>
		</SoCard>
		<SoCard title="useTable 示例" class="flex-1">
			<SoTable
				v-model:currentPage="queryParams.pageNum"
				v-model:pageSize="queryParams.pageSize"
				v-model:showSearch="showSearch"
				v-loading="loading"
				:pageProps="{
					total
				}"
				height="100%"
				@refresh="refresh"
				@mount="tableMount"
				@dragSort="dragSort" />
		</SoCard>
	</div>
</template>
