import { service } from '@/utils/request';
import type { LoginResponse } from './types';
import type { ApiResponse } from '@spyro/axios';

// 登录
export function login<T>(data: T): Promise<ApiResponse<LoginResponse>> {
	return service.request({
		url: '/login',
		method: 'POST',
		data
	});
}

// 刷新token
export function refresh<T>(params: T) {
	return service.request({
		url: '/refresh',
		method: 'get',
		params
	});
}

// 退出
export function logout() {
	return service.request({
		url: '/logout',
		method: 'POST'
	});
}
