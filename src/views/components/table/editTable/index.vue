<script lang="tsx">
	import { TabPaneName } from 'element-plus';
	import { useSingleEdit, useOverallEdit } from './hooks/index';
	import { SoTable, useTable } from '@/components/SoTable';

	export default defineComponent({
		name: 'EditTable',
		setup() {
			const activeName = ref('singleEdit');
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
					label: '表单表格(无校验)',
					name: 'unVerifyEdit'
				},
				{
					label: '表单表格(有校验)',
					name: 'verifyEdit'
				}
			]);

			const { tableMethods, tableMount } = useTable({
				immediate: false
			});
			const { setProps, refresh } = tableMethods;

			// 具体的列
			const columns = {
				singleEdit: useSingleEdit().columnProp.columns,
				overallEdit: useOverallEdit().columnProp.columns
			};
			// el-tab切换事件
			const handleChange = (name: TabPaneName) => {
				setProps({
					rowKey: 'uuid'
				});
			};

			onMounted(() => {
				setProps({
					rowKey: 'userId',
					columnList: columns.singleEdit
				});
			});

			return () => (
				<div class="h-full flex-col">
					<so-card title="树形表格示例" class="flex-1">
						<el-alert
							closable={false}
							title="表格搭配表单的可编辑用法"
							type="info"
							description="采用hook搭配TSX语法的方式对列进行配置，可编辑表格都需要设置rowKey。"
						/>
						<el-tabs v-model={activeName.value} onTabChange={handleChange}>
							{tabOptions.map((el) => (
								<el-tab-pane key={el.name} label={el.label} name={el.name} />
							))}
						</el-tabs>
						<SoTable height="100%" onRefresh={refresh} onMount={tableMount} />
					</so-card>
				</div>
			);
		}
	});
</script>
