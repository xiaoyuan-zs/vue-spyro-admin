import request from '@/utils/request';
import {
	RequestLoginForm,
	LoginResponse,
	RequestBlockAndClickCaptcha,
	RequestCheckBlockAndClickCaptcha,
	CheckBlockAndClickCaptchaResponse,
	BlockAndClickCaptchaResponse,
	UserResponse,
	IsCaptchaOnResponse
} from './types';

/**
 * 登录
 * @param data
 * @returns
 */
export const login = (data: RequestLoginForm) => {
	return request<LoginResponse>({
		url: '/login',
		method: 'POST',
		data
	});
};

/**
 * 退出登录
 * @returns
 */
export const logout = () => {
	return request({
		url: '/logout',
		method: 'POST'
	});
};

/**
 * 获取用户信息
 * @param data
 * @returns
 */
export const getLoginUserInfo = () => {
	return request<UserResponse>({
		url: '/getInfo',
		method: 'get'
	});
};

/**
 * 验证码是否开启
 * @param data
 * @returns
 */
export const getIsCaptchaOn = () => {
	return request<IsCaptchaOnResponse>({
		url: '/isCaptchaOn',
		method: 'get'
	});
};

/**
 * 获取滑块或者点选获取图片
 * @returns
 */
export const reqGet = (data: RequestBlockAndClickCaptcha) => {
	return request<BlockAndClickCaptchaResponse>({
		url: '/ajCaptcha/get',
		method: 'post',
		data
	});
};

/**
 * 滑块或者点选校验
 * @param data
 * @returns
 */
export const reqCheck = (data: RequestCheckBlockAndClickCaptcha) => {
	return request<CheckBlockAndClickCaptchaResponse>({
		url: '/ajCaptcha/check',
		method: 'post',
		data
	});
};

/**
 * 获取所有路由
 * @returns
 */
export const getAsyncRouters = () => {
	return request<RouteOptionConfig[]>({
		url: '/getAsyncRouters',
		method: 'get'
	});
};
