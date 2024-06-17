import { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

/** 定义axios 配置, 继承AxiosRequestConfig，满足原本的 axios.create({}) 配置项，在其基础上拓展  */
export interface AxiosOptions extends AxiosRequestConfig {
	// 定义拦截器
	interceptors: AxiosInterceptor;
	// 是否取消重复请求标识
	abortRepetitiveRequest?: boolean;
	// 重连配置
	retryConfig?: {
		// 重连次数
		count: number;
		// 每次请求间隔时间
		waitTime: number;
	};
}

/** 定义拦截器抽象类 */
export abstract class AxiosInterceptor {
	// 请求拦截器
	abstract requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
	// 请求错误拦截器
	abstract requestInterceptorsCatch?: (err: Error) => Error;
	// 响应拦截器
	abstract responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
	// 响应错误拦截器
	abstract responseInterceptorsCatch?: (error: AxiosError) => void;
}

/**
 *  定义返回类型
 */
export interface ApiResponse<T = any> {
	code: number;
	msg: string;
	data: T;
}