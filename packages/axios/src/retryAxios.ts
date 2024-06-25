import type { AxiosError, AxiosInstance } from 'axios';

/**
 * 请求超时报错重发
 * 在自定义responseInterceptorsCatch响应错误拦截器中使用，当请求超时报错时调用
 * @param instance axios实例
 * @param error axios响应错误
 * @returns
 */
export async function retryAxios(instance: AxiosInstance, error: AxiosError) {
	// 获取请求错误配置
	const errorConfig: any = error.config;
	const codeStatus = error.response?.status;
	// 获取配置项内容(请求间隔时间，请求次数)
	const { retry, count, waitTime } = errorConfig.retryConfig ?? {};
	// 判断是否开启重连
	if (!retry || codeStatus !== 500) return Promise.reject(error);
	// 当前重复请求的次数
	errorConfig.currentCount = errorConfig.currentCount ?? 0;
	// 如果当前的重复请求次数已经大于规定次数，则返回Promise
	if (errorConfig.currentCount >= count) return Promise.reject(error);
	// 重试次数加一
	errorConfig.currentCount++;
	// 等待间隔时间结束后再执行请求
	return wait(waitTime).then(() => instance(errorConfig));
}

function wait(waitTime: number) {
	// 保证按顺序执行
	return new Promise((resolve) => setTimeout(resolve, waitTime));
}
