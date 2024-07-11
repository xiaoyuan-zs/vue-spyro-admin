import { service } from '@/utils/request';
import type { ApiResponse } from '@spyro/axios';
import type { TreeNode } from './type';

// 获取随机树结构数据列表
export function getTrees<T>(params?: T): Promise<ApiResponse<TreeNode[]>> {
	return service.request({
		url: '/trees',
		method: 'get',
		params
	});
}
