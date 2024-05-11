import request from '@/utils/request';
const baseUrl = '/system/dept';

/**
 * 部门列表
 * @param params
 * @returns
 */
export const getDeptList = (params: PageRequest) => {
	return request<any>({
		url: baseUrl + '/list',
		method: 'get',
		params
	});
};
