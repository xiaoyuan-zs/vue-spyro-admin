import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { users } from './user.fake';

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
						accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
						refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
						expires: '2024/07/01 00:00:00'
					},
					message: '登录成功'
				};
			} else {
				return {
					code: 401,
					message: '登录失败'
				};
			}
		}
	}
]);
