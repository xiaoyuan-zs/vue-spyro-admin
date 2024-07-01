import type { ApiResponse } from '@spyro/axios';

interface UseTableProps<T> {
	fetchApi: (params?: any) => Promise<ApiResponse<T[]>>;
	params?: { [key: string]: any };
	dataCallBack?: (params: any) => any; // 数据响应成功回调, 进行数据处理,
}

interface TableState<T> {
	data: T[];
	loading?: boolean;
	total?: number;
}

/**
 * @description useTable<T> 泛型 T ---> 响应结果数据类型
 * @field fetchApi: 请求数据接口(必填)
 * @field params: 请求参数(可选)
 * @field dataCallBack: 数据响应成功回调, 进行数据处理(可选)
 */
export const useTable = <T = any>(props: UseTableProps<T>) => {
	// 表格数据状态
	const state = reactive<TableState<T>>({
		loading: false,
		data: [],
		total: 0
	});

	return {
		state
	};
};
