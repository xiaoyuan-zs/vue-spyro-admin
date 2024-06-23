import { service } from '@/utils/request';

export function login<T>(data: T) {
	return service.request({
		url: '/api/auth/local',
		method: 'POST',
		data
	});
}
