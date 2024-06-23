import { login } from '@/api/login';
import type { LoginParams } from '@/api/login/types';
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
	state: () => ({
		token: ''
	}),
	actions: {
		async loginAction(params: LoginParams) {
			const { data } = await login(params);
			this.token = data.token;
		}
	}
});
