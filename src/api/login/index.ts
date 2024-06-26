import { service } from '@/utils/request';
import type { LoginResponse } from './types';
import type { ApiResponse } from '@spyro/axios';

export function login<T>(data: T): Promise<ApiResponse<LoginResponse>> {
	return service.request({
		url: '/login',
		method: 'POST',
		data
	});
}

export function refresh<T>(params: T) {
	return service.request({
		url: '/refresh',
		method: 'get',
		params
	});
}

export function logout() {
	return service.request({
		url: '/logout',
		method: 'POST'
	});
}
