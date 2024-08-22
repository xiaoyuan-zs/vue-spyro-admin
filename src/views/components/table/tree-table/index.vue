<script setup lang="tsx">
	import { buildHierarchyTree } from '@spyro/utils';
	import { ColumnProps, useTable } from '@/components/SoTable';
	import { getTrees } from '@/api/tree';
	import { TreeNode } from '@/api/tree/type';

	defineOptions({
		name: 'TreeTable'
	});

	// 表格列
	const columns = reactive<ColumnProps<TreeNode>[]>([
		{
			type: 'selection',
			label: '勾选',
			width: '55'
		},
		{
			type: 'index',
			label: '序号',
			width: '55'
		},
		{
			prop: 'uuid',
			label: 'uuid',
			align: 'left'
		},
		{
			prop: 'label',
			label: '标签',
			align: 'left',
			overflowConfig: {
				initiate: true
			}
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
			label: '状态',
			tagConfig: {
				initiate: true
			},
			dictConfig: {
				options: () => [
					{
						dictLabel: '正常',
						dictValue: 0
					},
					{
						dictLabel: '禁用',
						dictValue: 1
					}
				]
			}
		},
		{
			prop: 'operation',
			label: '操作',
			renderer: () => (
				<>
					<el-button type="primary" link onClick={handleUpdate}>
						修改
					</el-button>
					<el-button type="primary" link onClick={handleDelete}>
						删除
					</el-button>
				</>
			)
		}
	]);

	const { tableState, tableMethods, tableMount } = useTable({
		fetchApi: async () => {
			const { data, total = 0 } = await getTrees();
			return { data: buildHierarchyTree(data), total };
		}
	});
	const { loading } = toRefs(tableState);
	const { setProps, refresh } = tableMethods;

	const handleUpdate = () => {
		ElMessage.success(`仅供预览展示`);
	};
	const handleDelete = () => {
		ElMessage.success(`仅供预览展示`);
	};

	onMounted(() => {
		setProps({
			rowKey: 'uuid',
			tableTool: false,
			columnList: columns
		});
	});
</script>
<template>
	<div class="h-full flex-col">
		<SoCard title="树形表格示例" class="flex-1">
			<SoTable v-loading="loading" height="100%" @refresh="refresh" @mount="tableMount" />
		</SoCard>
	</div>
</template>
