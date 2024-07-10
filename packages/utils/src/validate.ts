import { isArray, isObject, isString } from 'xe-utils';

/**
 * @description 判断url是否是http或https
 * @returns {Boolean}
 * @param url
 */
export const isHttp = (url: string): boolean => {
	return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1;
};

/**
 * @description 判断是否是url地址
 * @param path
 * @returns
 */
export const isUrl = (path: string): boolean => {
	const reg =
		/(((^https?:(?:\/\/)?)(?:[-:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&%@.\w_]*)#?(?:[\w]*))?)$/;
	return reg.test(path);
};

/**
 * @description 判断数组、字符串、Map、Set、对象是否为空, 上述为空则返回 true, 否则返回false, 其余类型全部返回 false
 * @param val
 * @returns
 */
export const isAllEmpty = <T = unknown>(val: T): val is T => {
	if (isArray(val) || isString(val)) {
		return val.length === 0;
	}

	if (val instanceof Map || val instanceof Set) {
		return val.size === 0;
	}

	if (isObject(val)) {
		return Object.keys(val).length === 0;
	}

	return false;
};
