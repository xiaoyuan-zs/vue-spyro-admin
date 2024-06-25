import { service } from '@/utils/request';
import type { ApiResponse } from 'packages/axios/src';
import type { User } from './types';
export function getUserList<T>(params?: T): Promise<ApiResponse<User>> {
	return service.request({
		url: '/users',
		method: 'get',
		params
	});
}
