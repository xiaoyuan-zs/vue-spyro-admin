import jwt from 'jsonwebtoken';
import type { User } from './user.fake';

interface VerifyUser extends User {
	iat?: number;
	exp?: number;
}

const privateAccessKey = '@spyroAdminAccess!123';
const privateRefreshKey = '@spyroAdminRefresh!123';

export const createAccessToken = (user: VerifyUser) => {
	delete user.exp;
	delete user.iat;
	return jwt.sign(user, privateAccessKey, {
		expiresIn: 60 * 60
	});
};

export const createRefreshToken = (user: VerifyUser) => {
	delete user.exp;
	delete user.iat;
	return jwt.sign(user, privateRefreshKey, {
		expiresIn: 60 * 60 * 24
	});
};

export const verifyIdentity = (token: string, type: 'access' | 'refresh') => {
	const key = type === 'access' ? privateAccessKey : privateRefreshKey;
	let flag = true;
	let data: any = {};
	jwt.verify(token, key, function (err, decoded) {
		if (err) {
			flag = false;
			data = {
				code: 401,
				data: err
			};
		} else {
			flag = true;
			data = { decoded };
		}
	});
	return {
		flag,
		data
	};
};
