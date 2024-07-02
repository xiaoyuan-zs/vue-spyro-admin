import type { SoTable } from '@/components/SoTable';

interface UseTableProps<T> {
	// 表格数据获取及处理
	fetchApi: () => Promise<{ data: T[]; total: number }>;
	// 删除表格数据
}

interface TableState<T> {
	data: T[];
	loading?: boolean;
	total?: number;
}

/**
 * @description useTable<T> 泛型 T ---> 响应结果数据类型
 * @field fetchApi: 表格数据获取及处理(必填)
 */
export const useTable = <T = any>(props: UseTableProps<T>) => {
	// 表格数据状态
	const state = reactive<TableState<T>>({
		loading: false,
		data: [],
		total: 0
	});

	// SoTable 实例
	const soTableRef = ref<InstanceType<typeof SoTable>>();
	// 获取表格实例
	const getTableInstance = () => {};

	// 操作表格方法
	const tableMethods = {};

	return {
		state
	};
};
