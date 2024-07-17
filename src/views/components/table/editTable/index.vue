<script lang="tsx">
	import { TabPaneName } from 'element-plus';
	import { useSingleEdit, useOverallEdit, useUnVerifyEdit, useVerifyEdit } from './hooks/index';
	import { SoTable, useTable } from '@/components/SoTable';
	import VueJsonPretty from 'vue-json-pretty';
	import 'vue-json-pretty/lib/styles.css';

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
			const tableData = ref<any>([]);

			const { tableMethods, tableMount } = useTable({
				immediate: false
			});
			const { setProps, refresh } = tableMethods;

			// 具体的列
			const columnProp = {
				singleEdit: useSingleEdit().columnProp,
				overallEdit: useOverallEdit().columnProp,
				unVerifyEdit: useUnVerifyEdit().columnProp,
				verifyEdit: useVerifyEdit().columnProp
			};
			// el-tab切换事件
			const handleChange = (name: TabPaneName) => {
				const key = name as keyof typeof columnProp;
				const prop = columnProp[key];
				if (prop) initTable(prop);
			};

			const initTable = (prop: (typeof columnProp)[keyof typeof columnProp]) => {
				setProps({
					rowKey: 'userId',
					columnList: prop.columns,
					tableData: prop.data
				});
				tableData.value = prop.data;
			};

			onMounted(() => {
				initTable(columnProp.singleEdit);
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
						<div class="flex-1 flex overflow-hidden">
							<div class="w-60 h-full mr-4">
								<el-scrollbar>
									<VueJsonPretty data={unref(tableData)} />
								</el-scrollbar>
							</div>
							<SoTable class="flex-1" height="100%" tableTool={false} onRefresh={refresh} onMount={tableMount} />
						</div>
					</so-card>
				</div>
			);
		}
	});
</script>
