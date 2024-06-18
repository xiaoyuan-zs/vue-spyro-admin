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
		// 在请求拦截器中进行添加，当多次重复请求时，数据尚未响应，也就会多次调用该方法进行添加，发现存在重复请求，即取消之前未响应回来的请求
		this.removePending(config);
		// 获取首次请求的key
		const key = getUrlKey(config);
		// 创建控制器实例
		const abortController = new AbortController();
		// 定义对应signal标识
		config.signal = abortController.signal;
		// 存入存储请求控制器中
		if (!pendingMap.has(key)) {
			pendingMap.set(key, abortController);
		}
	}
	removePending(config: AxiosRequestConfig) {
		// 在响应拦截器中，调用该方法，若数据已经响应回来，则删除存储请求控制器中的kv即可
		const url = getUrlKey(config);
		// 若存在key，说明请求重复，需要中断
		if (pendingMap.has(url)) {
			// 获取对应请求的控制器实例
			const abortController = pendingMap.get(url);
			// 取消请求 （首次接口已经响应，调用该方法无效果）
			abortController?.abort();
			// 清除出pendingMap
			pendingMap.delete(url);
		}
	}
}
