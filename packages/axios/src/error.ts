/** 错误码 */
const errorCode = {
	400: '客户端错误，请求格式或参数有误！',
	401: '身份认证不通过',
	403: '用户得到授权，但是访问是被禁止的!',
	404: '未找到目标资源!',
	500: '服务器错误!',
	503: '服务器错误！'
};

/** 检查错误码 */
export const checkErrorStatus = (status?: keyof typeof errorCode, message?: string, callback?: (errMsg: string) => any) => {
	let errorMessage = message ?? '';
	if (status && errorCode[status]) errorMessage = errorCode[status];
	if (callback) callback(errorMessage);
};
