import type { AxiosRequestConfig } from 'axios';

// 创建存储请求控制器
const pendingMap = new Map<string, AbortController>();

// 创建唯一标识， 作为控制器的key
const getUrlKey = (config: AxiosRequestConfig) => {
	return [config.url, config.method].join(':');
};

/**
 *  取消请求类
 */
export class CancelAxios {
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const key = getUrlKey(config);
		// 创建控制器实例
		const abortController = new AbortController();
		// 定义对应signal标识
		config.signal = abortController.signal;
		if (!pendingMap.has(key)) {
			pendingMap.set(key, abortController);
		}
	}
	removePending(config: AxiosRequestConfig) {
		const url = getUrlKey(config);
		if (pendingMap.has(url)) {
			// 获取对应请求的控制器实例
			const abortController = pendingMap.get(url);
			// 取消请求
			abortController?.abort();
			// 清除出pendingMap
			pendingMap.delete(url);
		}
	}
}
