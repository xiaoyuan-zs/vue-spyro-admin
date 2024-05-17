/**
 * 判断url是否是http或https
 * @returns {Boolean}
 * @param url
 */
export const isHttp = (url: string): boolean => {
	return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1;
};

/**
 * 判断path是否为外链
 * @param path
 */
export const isExternal = (path: string) => {
	return /^(https?:|mailto:|tel:)/.test(path);
};
