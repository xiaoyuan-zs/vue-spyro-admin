import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { users } from './user.fake';
import { createAccessToken, createRefreshToken, verifyIdentity } from './verifyJwt';

export default defineFakeRoute([
	{
		url: '/login',
		method: 'POST',
		response: ({ body }) => {
			const { username, password } = body;
			const user = users.find((el) => el.username === username && el.password === password)!;
			if (user) {
				return {
					code: 200,
					data: {
						nickname: user.nickname,
						accessToken: createAccessToken(user),
						refreshToken: createRefreshToken(user)
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
		url: '/getUserInfo',
		method: 'GET',
		response: ({ headers }) => {
			const { flag, data } = verifyIdentity(headers.authorization!, 'access');
			if (!flag) return data;
			return {
				code: 200,
				data: data.decoded,
				message: '操作成功'
			};
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
		response: ({ query }) => {
			const { refreshToken } = query;
			const { flag, data } = verifyIdentity(refreshToken as string, 'refresh');
			if (!flag) return data;
			return {
				code: 200,
				data: {
					accessToken: createAccessToken(data.decoded),
					refreshToken: createRefreshToken(data.decoded)
				},
				message: '操作成功'
			};
		}
	}
]);
