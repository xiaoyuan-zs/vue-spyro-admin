import request from '@/utils/request';
const baseUrl = '/system/dict/data';

/**
 * 根据字典类型查询字典数据信息
 * @param params
 * @returns
 */
export const getDicts = (dictType: string) => {
	return request<DictType[]>({
		url: baseUrl + `/type/${dictType}`,
		method: 'get'
	});
};
