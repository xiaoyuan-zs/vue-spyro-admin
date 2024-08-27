import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { loginUser } from './user.fake';
import { createAccessToken, createRefreshToken, verifyIdentity } from './verifyJwt';

export default defineFakeRoute([
	{
		url: '/login',
		method: 'POST',
		response: ({ body }) => {
			const { username, password } = body;
			const user = loginUser.find((el) => el.username === username && el.password === password)!;
			if (user) {
				return {
					code: 200,
					data: {
						nickname: user.nickname,
						accessToken: createAccessToken(),
						refreshToken: createRefreshToken()
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
		response: ({ query }) => {
			console.log(33, query);

			const { nickname } = query;
			const { data } = verifyIdentity(nickname as string);
			return {
				code: 200,
				data: data,
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
		response: () => {
			return {
				code: 200,
				data: {
					accessToken: createAccessToken(),
					refreshToken: createRefreshToken()
				},
				message: '操作成功'
			};
		}
	}
]);
