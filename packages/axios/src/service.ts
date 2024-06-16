import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AxiosInterceptor, AxiosOptions, ApiResponse } from './types';

class AxiosConfig {
	// axios instance
	private axiosInstance: AxiosInstance;
	// axios options
	private axiosOptions: AxiosOptions;
	// axios interceptor
	private interceptors: AxiosInterceptor;

	constructor(options: AxiosOptions) {
		this.axiosInstance = axios.create(options);
		this.axiosOptions = options;
		this.interceptors = options.interceptors;

		// 初始化拦截器
		this.setInterceptors();
	}

	// 注册拦截器
	private setInterceptors() {
		//1. 若拦截器不存在则退出
		if (!this.interceptors) return;

		const { requestInterceptors, requestInterceptorsCatch, responseInterceptor, responseInterceptorsCatch } = this.interceptors;

		//2. 初始化请求拦截器
		this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			// 外部传递的请求拦截器存在则使用外部拦截器
			if (requestInterceptors) config = requestInterceptors(config);
			return config;
			//TODO 请求错误待默认处理
		}, requestInterceptorsCatch ?? undefined);

		//3. 初始化响应拦截器
		this.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => {
				// 外部传递的响应拦截器存在则使用响应拦截器
				if (responseInterceptor) response = responseInterceptor(response);
				return response;
			},
			(err: AxiosError) => {
				// 请求响应错误，若存在外部响应错误拦截器则交给外部处理，否则直接返回错误
				if (responseInterceptorsCatch) responseInterceptorsCatch(err);
				return err;
			}
		);
	}

	// 封装通用request请求
	request<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return new Promise((resolve, reject) => {
			this.axiosInstance
				.request<ApiResponse<T>>(config)
				.then((res) => resolve(res.data))
				.catch((err) => reject(err));
		});
	}

	// 封装Get请求
	get<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.request<T>({ ...config, method: 'GET' });
	}
	// 封装POST请求
	post<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.request<T>({ ...config, method: 'POST' });
	}

	// 封装PUT请求
	put<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.request<T>({ ...config, method: 'PUT' });
	}
	// 封装DELETE请求
	delete<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.request<T>({ ...config, method: 'DELETE' });
	}
}

export { AxiosConfig };
