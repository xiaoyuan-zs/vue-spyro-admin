import request from '@/utils/request';
import { PostDTO } from './types';
const baseUrl = '/system/post';

/**
 * 获取岗位选择框列表
 * @param params
 * @returns
 */
export const getPostOptionSelect = () => {
	return request<PostDTO[]>({
		url: baseUrl + '/optionselect',
		method: 'get'
	});
};
