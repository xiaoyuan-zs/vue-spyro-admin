import { axios, checkErrorStatus, retryAxios, AxiosConfig, type AxiosError } from '@spyro/axios';
import { useUserStore } from '@/store';

const { VITE_MOCK_SERVER, VITE_APP_BASE_API } = import.meta.env;

export const service = new AxiosConfig({
	baseURL: VITE_MOCK_SERVER ? '/mock' : VITE_APP_BASE_API,
	timeout: 10000,
	// 拦截器
	interceptors: {
		requestInterceptors(config) {
			const userStore = useUserStore();
			if (userStore.accessToken) {
				config.headers['Authorization'] = userStore.accessToken;
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
		count: 5,
		waitTime: 5000
	}
});
