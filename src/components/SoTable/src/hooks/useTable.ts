import type { ColumnProps, SoTable, TableProps } from '@/components/SoTable';
import { useConfirm } from '@/hooks';
import type { ApiResponse } from '@spyro/axios';
import type { ElTable } from 'element-plus';

interface UseTableProps<T> {
	// 是否初始化执行
	immediate?: boolean;
	// 表格数据获取及处理
	fetchApi?: () => Promise<{ data: T[]; total: number }>;
	// 删除表格数据
	fetchDelApi?: () => Promise<ApiResponse<any>>;
}

interface TableState<T> {
	loading: boolean;
	data: T[];
	total: number;
}

/**
 * @description useTable<T> 泛型 T ---> 响应结果数据类型
 * @field fetchApi: 表格数据获取及处理(必填)
 */
export const useTable = <T = any>(props: UseTableProps<T>) => {
	const { immediate = true } = props;

	// 表格数据状态
	const state: TableState<T> = reactive({
		loading: false,
		data: [],
		total: 0
	});

	// SoTable 实例
	const soTableRef = ref<InstanceType<typeof SoTable>>();
	// ElTable 实例
	const elTableRef = ref<InstanceType<typeof ElTable>>();

	const tableMount = ({ soRef, elRef }: { soRef: InstanceType<typeof SoTable>; elRef: InstanceType<typeof ElTable> }) => {
		soTableRef.value = soRef;
		elTableRef.value = elRef;
	};

	// 获取SoTable表格实例
	const getSoTableInstance = async () => {
		await nextTick();
		const table = unref(soTableRef);
		if (!table) {
			console.error('表格实例不存在，请检查表格是否挂载完成');
		}
		return table;
	};

	// 操作表格方法
	const tableMethods = {
		// 加载数据
		getList: async () => {
			if (props.fetchApi) {
				state.loading = true;
				try {
					const { total, data } = await props.fetchApi();
					state.data = data;
					state.total = total;
					tableMethods.setProps({
						tableData: data,
						pageProps: {
							total
						}
					});
				} catch (e) {
					console.error('fetchApi error', e);
				} finally {
					state.loading = false;
				}
			}
		},
		// 设置表格props
		setProps: async (props: TableProps) => {
			const instance = await getSoTableInstance();
			instance?.setProps(props);
		},
		// 添加表格列
		addColumn: async (column: ColumnProps, index?: number) => {
			const instance = await getSoTableInstance();
			instance?.addColumn(column, index);
		},
		// 删除表格具体列
		delColumn: async (prop: string) => {
			const instance = await getSoTableInstance();
			instance?.delColumn(prop);
		},
		// ElTable 实例
		getElTableInstance: async () => {
			await getSoTableInstance();
			return unref(elTableRef);
		},
		// 刷新数据
		refresh: async () => {
			await tableMethods.getList();
		},
		// 删除
		delData: async (ids: number[]) => {
			await useConfirm().confirmApi({
				fetchApi: props.fetchDelApi,
				params: ids,
				message: '删除选中数据'
			});
			tableMethods.getList();
		}
	};

	// 挂在完成之后初始化数据
	onMounted(() => {
		if (immediate) tableMethods.getList();
	});

	return {
		tableMount,
		tableMethods,
		tableState: state
	};
};
