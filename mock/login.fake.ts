import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { users } from './user.fake';

export const accessToken = 'eyJhbGciOiJIUzUxMiJ9.admin';
export const refreshToken = 'eyJhbGciOiJIUzUxMiJ9.adminRefresh';
export const accessTokenExpires = 3600;

export default defineFakeRoute([
	{
		url: '/login',
		method: 'POST',
		response: ({ body }) => {
			const { username, password } = body;
			const user = users.find((el) => el.username === username && el.password === password);
			if (user) {
				return {
					code: 200,
					data: {
						nickname: user.nickname,
						accessToken,
						refreshToken,
						accessTokenExpires
					},
					message: '登录成功'
				};
			} else {
				return {
					code: 401,
					message: '用户名或密码错误，登录失败'
				};
			}
		}
	},
	{
		url: '/logout',
		method: 'POST',
		response: () => {
			return {
				code: 200,
				message: '退出成功'
			};
		}
	},
	{
		url: '/refresh',
		method: 'get',
		response: () => {
			return {
				code: 200,
				data: {
					accessToken: accessToken + 2,
					refreshToken: refreshToken
				},
				message: '操作成功'
			};
		}
	}
]);
