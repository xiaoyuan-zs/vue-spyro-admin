import axios, {
	type AxiosError,
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig
} from 'axios';
import type { AxiosInterceptor, AxiosOptions, ApiResponse } from './types';
import { CancelAxios } from './cancelAxios';
import qs from 'qs';
import { isAllEmpty } from '@spyro/utils';

class AxiosConfig {
	// axios instance
	private axiosInstance: AxiosInstance;
	// axios options
	private axiosOptions: AxiosOptions;
	// axios interceptor
	private axiosInterceptors: AxiosInterceptor;

	constructor(options: AxiosOptions) {
		this.axiosInstance = axios.create(options);
		this.axiosOptions = options;
		this.axiosInterceptors = options.interceptors;

		// 初始化默认拦截器
		this.setInterceptors();
	}

	// 注册默认拦截器
	private setInterceptors() {
		//1. 若拦截器不存在则退出
		if (!this.axiosInterceptors) return;

		const { requestInterceptors, requestInterceptorsCatch, responseInterceptor, responseInterceptorsCatch } = this.axiosInterceptors;

		// 创建取消请求示例
		const cancelAxios = new CancelAxios();

		//2. 初始化请求拦截器
		this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			// 修改axios中 GET请求参数的默认序列化方式
			if (config.method === 'get') {
				let url = config.url! + (config.params && !isAllEmpty(config.params) ? '?' : '');
				let params = qs.stringify(config.params, { arrayFormat: 'comma' });
				url += params;
				config.params = {};
				config.url = url;
			}

			// 是否清除重复请求标识
			const abortRepetitiveRequest = (config as unknown as any).abortRepetitiveRequest ?? this.axiosOptions.abortRepetitiveRequest;
			if (abortRepetitiveRequest) {
				// 在请求拦截器中进行添加，当多次重复请求时，数据尚未响应，也就会多次调用该方法进行添加，发现存在重复请求，即取消之前未响应回来的请求
				cancelAxios.addPending(config);
			}

			// 外部传递的请求拦截器存在则使用外部拦截器
			if (requestInterceptors) return requestInterceptors(config);
			return config;
			//TODO 默认请求错误待处理
		}, requestInterceptorsCatch ?? undefined);

		//3. 初始化响应拦截器
		this.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => {
				// 在响应拦截器中，调用该方法，若数据已经响应回来，则删除存储请求控制器中的kv即可
				response && cancelAxios.removePending(response.config);
				// 外部传递的响应拦截器存在则使用响应拦截器
				if (responseInterceptor) return responseInterceptor(response);
				return response;
			},
			(err: AxiosError) => {
				// 请求响应错误，若存在外部响应错误拦截器则交给外部处理，否则直接返回错误
				if (responseInterceptorsCatch) return responseInterceptorsCatch(this.axiosInstance, err);
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
