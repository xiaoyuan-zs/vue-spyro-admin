import { service } from '@/utils/request';
import type { ApiResponse } from '@spyro/axios';
import type { User } from './types';

// 获取用户列表
export function getUserList<T>(params?: T): Promise<ApiResponse<User[]>> {
	return service.request({
		url: '/users',
		method: 'get',
		params
	});
}

// 获取用户信息
export function getUserInfo<T>(params?: T): Promise<ApiResponse<User>> {
	return service.request({
		url: '/getUserInfo',
		method: 'get',
		params
	});
}
