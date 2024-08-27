import { loginUser } from './user.fake';

export const createAccessToken = () => {
	return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjA1N2ZmYjdiLTRkZmEtNDQ4My05YzJlLWM5YjQyYjNkYWM5NCJ9.PK1VmupN1t7D7h7mxXEKc2kiB6ftzz9TkAYc9xAEnb3PtjZF9N4zWJ7vJl7-o7h-US6dTofTkSl8eJTkSbxlsA';
};

export const createRefreshToken = () => {
	return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjA1N2ZmYjdiLTRkZmEtNDQ4My05YzJlLWM5YjQyYjNkYWM5NCJ9.PK1VmupN1t7D7h7mxXEKc2kiB6ftzz9TkAYc9xAEnb3PtjZF9N4zWJ7vJl7-o7h-US6dTofTkSl8eJTkSbxlsA';
};

export const verifyIdentity = (nickname: string) => {
	const user = loginUser.find((el) => el.nickname === nickname);
	return {
		data: user
	};
};
