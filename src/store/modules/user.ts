import { login } from '@/api/login';
import type { LoginParams } from '@/api/login/types';
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
	state: () => ({
		accessToken: '',
		refreshToken: '',
		nickname: ''
	}),
	actions: {
		async loginAction(params: LoginParams) {
			const { data } = await login(params);
			this.accessToken = data.accessToken;
			this.refreshToken = data.refreshToken;
			this.nickname = data.nickname;
		}
	}
});
