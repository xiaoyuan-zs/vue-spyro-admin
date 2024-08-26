import type { User } from './user.fake';

interface VerifyUser extends User {
	iat?: number;
	exp?: number;
}

export const createAccessToken = (user: VerifyUser) => {
	delete user.exp;
	delete user.iat;
	return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjA1N2ZmYjdiLTRkZmEtNDQ4My05YzJlLWM5YjQyYjNkYWM5NCJ9.PK1VmupN1t7D7h7mxXEKc2kiB6ftzz9TkAYc9xAEnb3PtjZF9N4zWJ7vJl7-o7h-US6dTofTkSl8eJTkSbxlsA';
};

export const createRefreshToken = (user: VerifyUser) => {
	delete user.exp;
	delete user.iat;
	return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjA1N2ZmYjdiLTRkZmEtNDQ4My05YzJlLWM5YjQyYjNkYWM5NCJ9.PK1VmupN1t7D7h7mxXEKc2kiB6ftzz9TkAYc9xAEnb3PtjZF9N4zWJ7vJl7-o7h-US6dTofTkSl8eJTkSbxlsA';
};

export const verifyIdentity = (token: string, type: 'access' | 'refresh') => {
	let flag = true;
	let data: any = {
		decoded: {
			userId: '123456',
			username: 'admin',
			nickname: 'admin',
			password: 'admin123',
			sex: 'male',
			status: true,
			avatar: 'https://avatars.githubusercontent.com/u/60203443',
			phone: '276.467.4807',
			email: 'Kaylie.Dickens85@yahoo.com',
			createTime: '2025-03-25T14:07:32.472Z',
			roles: ['admin'],
			permissions: ['*:*:*'],
			createBy: 'admin',
			remark: '我是管理员',
			iat: 1723196857,
			exp: 1723200457
		}
	};
	return {
		flag,
		data
	};
};
