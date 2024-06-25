import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

/** 定义axios 配置, 继承AxiosRequestConfig，满足原本的 axios.create({}) 配置项，在其基础上拓展  */
export interface AxiosOptions extends AxiosRequestConfig {
	// 定义拦截器
	interceptors: AxiosInterceptor;
	// 是否取消重复请求标识
	abortRepetitiveRequest?: boolean;
	// 重连配置
	retryConfig?: {
		// 是否开启重连
		retry: boolean;
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
	abstract requestInterceptorsCatch?: (error: Error) => Error;
	// 响应拦截器
	abstract responseInterceptor?: (response: AxiosResponse<ApiResponse>) => AxiosResponse<ApiResponse>;
	// 响应错误拦截器（添加实例为了使用请求超时报错重试）
	abstract responseInterceptorsCatch?: (instance: AxiosInstance, error: AxiosError) => void;
}

/**
 *  定义返回类型
 */
export interface ApiResponse<T = any> {
	code: number;
	msg: string;
	data: T;
	message?: string;
}

export type { AxiosError, AxiosInstance, AxiosResponse };
