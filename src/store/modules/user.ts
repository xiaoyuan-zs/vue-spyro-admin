import { login, logout, refresh } from '@/api/login';
import type { LoginParams } from '@/api/login/types';
import { getUserInfo } from '@/api/user';
import { piniaPersist } from '@/store/helpers/piniaPersist';
import { defineStore } from 'pinia';
import type { UserStateType } from '../types';
import router from '@/router';

export const useUserStore = defineStore('user', {
	state: (): UserStateType => ({
		accessToken: '',
		refreshToken: '',
		nickname: '',
		userInfo: {}
	}),
	actions: {
		async loginAction(params: LoginParams) {
			const { data } = await login(params);
			this.accessToken = data.accessToken;
			this.refreshToken = data.refreshToken;
			this.nickname = data.nickname;
		},
		async getUserInfoAction() {
			const { data } = await getUserInfo();
			this.nickname = data.nickname;
			this.userInfo = data;
		},
		async refreshTokenAction() {
			const { data } = await refresh({ refreshToken: this.refreshToken });
			this.accessToken = data.accessToken;
			this.refreshToken = data.refreshToken;
		},
		async logoutAction() {
			ElMessageBox.confirm('是否退出登录?', '温馨提示', {
				confirmButtonText: '是',
				cancelButtonText: '否',
				type: 'warning'
			})
				.then(() => logout())
				.then(() => {
					this.accessToken = '';
					this.refreshToken = '';
					this.nickname = '';
					router.replace('/login');
				});
		}
	},
	persist: piniaPersist({ key: 'user', paths: ['accessToken', 'refreshToken'] })
});
