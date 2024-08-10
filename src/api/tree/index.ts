import { service } from '@/utils/request';
import type { ApiResponse } from '@spyro/axios';
import type { TreeNode } from './type';

// 获取随机树结构数据列表
export function getTrees(): Promise<ApiResponse<TreeNode[]>> {
	return service.request({
		url: '/trees',
		method: 'get'
	});
}
