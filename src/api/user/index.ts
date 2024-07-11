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

// 通过用户id查询用户信息
export function getUserById(id: string): Promise<ApiResponse<User>> {
	return service.request({
		url: '/users/' + id,
		method: 'get'
	});
}

// 获取用户信息
export function getUserInfo(): Promise<ApiResponse<User>> {
	return service.request({
		url: '/getUserInfo',
		method: 'get'
	});
}
