import jwt, { type VerifyErrors } from 'jsonwebtoken';
import type { User } from './user.fake';

interface VerifyToken {
	verify: boolean;
	decoded: User;
	err: VerifyErrors;
}

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

// 验证token是否有效或过期
export const verifyAccessToken = (token: string) => {
	const decoded = jwt.verify(token, privateAccessKey, function (err, decoded) {
		if (err) {
			return {
				verify: false,
				err
			};
		}
		return {
			verify: true,
			decoded
		};
	}) as unknown as VerifyToken;
	return decoded;
};
// 验证refreshToken是否有效或过期
export const verifyRefreshToken = (token: string) => {
	const decoded = jwt.verify(token, privateRefreshKey, function (err, decoded) {
		if (err) {
			return {
				verify: false,
				err
			};
		}
		return {
			verify: true,
			decoded
		};
	}) as unknown as VerifyToken;
	return decoded;
};
