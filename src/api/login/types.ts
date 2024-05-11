/**
 * 请求类型
 */

import { UserDTO } from '@/api/system/user/types';

// 登录携带参数类型
export interface RequestLoginForm {
	username: string;
	password: string;
	verifyCode?: string;
	captchaCodeKey?: string;
	captchaVerification?: string;
}

// 获取滑块点击验证码
export interface RequestBlockAndClickCaptcha {
	captchaType: string;
	clientUid?: string;
}

// 滑块点击验证码校验请求
export interface RequestCheckBlockAndClickCaptcha {
	captchaType: string;
	pointJson: string;
	token: string;
}

/**
 * 响应类型
 */
// 登录响应返回
export interface LoginResponse {
	token: string;
}

//用户信息响应返回
export interface UserResponse {
	permissions: string[];
	roles: string[];
	user: UserDTO;
}

// 验证码是否开启
export interface IsCaptchaOnResponse {
	isCaptchaOn: boolean;
	captchaType: string;
}

// 滑块点击验证码响应
export interface BlockAndClickCaptchaResponse {
	captchaId?: string;
	projectCode?: string;
	captchaType?: string;
	captchaOriginalPath?: string;
	captchaFontType?: string;
	captchaFontSize?: number;
	secretKey: string;
	originalImageBase64: string;
	point?: BlockAndClickCaptchaPoint;
	jigsawImageBase64?: string;
	wordList: string[];
	pointList?: BlockAndClickCaptchaPoint[];
	pointJson?: string;
	token: string;
	result: boolean;
	captchaVerification?: string;
	clientUid?: string;
	ts?: number;
	browserInfo?: string;
}

// 核验滑块点击验证码
export interface CheckBlockAndClickCaptchaResponse {
	captchaType: string;
	token: string;
	result: boolean;
	opAdmin: boolean;
}

interface BlockAndClickCaptchaPoint {
	secretKey?: string;
	x: number;
	y: number;
}
