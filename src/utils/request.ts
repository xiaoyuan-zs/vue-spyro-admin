import { axios, checkErrorStatus, retryAxios, AxiosConfig, type AxiosError } from '@spyro/axios';
import { useUserStore } from '@/store';

const request = new AxiosConfig({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 10000,
	// 拦截器
	interceptors: {
		requestInterceptors(config) {
			const userStore = useUserStore();
			if (userStore.token) {
				config.headers['Authorization'] = userStore.token;
			}
			return config;
		},
		requestInterceptorsCatch(error) {
			return error;
		},
		responseInterceptor(response) {
			return response;
		},
		responseInterceptorsCatch(instance, error) {
			const message = error.code === 'ECONNABORTED' ? '请求超时' : undefined;
			// 检查请求是否已取消
			if (axios.isCancel(error)) {
				return Promise.reject(error);
			}
			// 检查响应状态码
			checkErrorStatus((error as AxiosError).response?.status as any, message, (message) => {
				ElMessage.error(message);
				console.error(message);
			});
			// 响应错误实现重连功能
			return retryAxios(instance, error);
		}
	},
	// 是否取消重复请求
	abortRepetitiveRequest: true,
	// 超时重试
	retryConfig: {
		count: 10,
		waitTime: 1000
	}
});

export default request;
