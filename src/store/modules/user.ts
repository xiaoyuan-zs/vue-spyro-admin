import { login, logout } from '@/api/login';
import type { LoginParams } from '@/api/login/types';
import { piniaPersist } from '@/plugins/piniaPersist';
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
		},
		async logoutAction() {
			await logout();
			this.accessToken = '';
			this.refreshToken = '';
			this.nickname = '';
		}
	},
	persist: piniaPersist({ key: 'user', paths: ['accessToken'] })
});
