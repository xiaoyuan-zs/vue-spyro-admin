import router from '@/router';
import { login, logout, refresh } from '@/api/login';
import { getUserInfo } from '@/api/user';
import { piniaPersist } from '@/store/helpers/piniaPersist';
import { defineStore } from 'pinia';
import type { UserStateType } from '../types';
import type { LoginParams } from '@/api/login/types';

const isMock = import.meta.env.VITE_MOCK_SERVER === 'true';

export const useUserStore = defineStore('user', {
	state: (): UserStateType => ({
		accessToken: '',
		refreshToken: '',
		nickname: '',
		userInfo: {}
	}),
	getters: {
		// 用户权限
		permissions: (state) => state.userInfo.permissions || [],
		// 用户角色
		roles: (state) => state.userInfo.roles || []
	},
	actions: {
		async loginAction(params: LoginParams) {
			const { data } = await login(params);
			this.accessToken = data.accessToken;
			this.refreshToken = data.refreshToken;
			this.nickname = data.nickname;
		},
		async getUserInfoAction() {
			// mock 环境需要传递 角色信息
			const params = isMock ? { nickname: this.nickname } : undefined;
			const { data } = await getUserInfo(params);
			this.nickname = data.nickname;
			this.userInfo = data;
		},
		async refreshTokenAction() {
			const { data } = await refresh({ refreshToken: this.refreshToken });
			this.accessToken = data.accessToken;
			this.refreshToken = data.refreshToken;
		},
		async logoutAction() {
			await logout();
			this.accessToken = '';
			this.refreshToken = '';
			this.nickname = '';
			this.userInfo = {};
			router.push('/login');
		}
	},
	persist: piniaPersist({ key: 'user', paths: ['accessToken', 'refreshToken', 'nickname'] })
});
