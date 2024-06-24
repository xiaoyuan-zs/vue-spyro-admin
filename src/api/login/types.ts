import type { User } from '@/api/user/types';

export interface LoginParams {
	username: string;
	password: string;
}

export interface LoginResponse extends User {
	accessToken: string;
	refreshToken: string;
	expires: string;
}
