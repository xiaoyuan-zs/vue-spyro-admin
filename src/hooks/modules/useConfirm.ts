import type { ApiResponse } from '@spyro/axios';

type ConfirmType = 'success' | 'info' | 'warning' | 'error';

type ConfirmApi = {
	fetchApi?: (params: any) => Promise<ApiResponse<any>>;
	params?: any;
	message?: string;
	type?: ConfirmType;
	draggable?: boolean;
};

export const useConfirm = () => {
	const confirmApi = (config: ConfirmApi) => {
		const { message = '', type = 'warning', draggable = false } = config;
		return new Promise((resolve) => {
			ElMessageBox.confirm(`是否${message}?`, '温馨提示', {
				confirmButtonText: '确 认',
				cancelButtonText: '取 消',
				type,
				draggable
			}).then(async () => {
				if (config.fetchApi) {
					const result = await config.fetchApi(config.params);
					resolve(result);
				}
				ElMessage({
					type: 'success',
					message: `${message}成功!`
				});
			});
		});
	};

	return {
		confirmApi
	};
};
