import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { users } from './user.fake';
import { createAccessToken, createRefreshToken, verifyAccessToken, verifyRefreshToken } from './verifyJwt';

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
			const result = verifyAccessToken(headers.authorization!);
			if (!result.verify) {
				return {
					code: 401,
					...result.err
				};
			}
			return {
				code: 200,
				data: result.decoded,
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
			const result = verifyRefreshToken(refreshToken as string);
			if (!result.verify) {
				return {
					code: 401,
					...result.err
				};
			}
			return {
				code: 200,
				data: {
					accessToken: createAccessToken(result.decoded),
					refreshToken: createRefreshToken(result.decoded)
				},
				message: '操作成功'
			};
		}
	}
]);
