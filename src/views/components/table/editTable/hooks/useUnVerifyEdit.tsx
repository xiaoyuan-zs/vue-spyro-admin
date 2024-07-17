import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';

export const useUnVerifyEdit = () => {
	const columnProp = reactive<{
		columns: ColumnProps<User>[];
		data: User[];
	}>({
		columns: [
			{
				type: 'index',
				label: '序号',
				width: '55'
			},
			{
				prop: 'username',
				label: '用户名',
				overflowConfig: {
					initiate: true
				}
			},
			{
				prop: 'nickname',
				label: '昵称'
			},
			{
				prop: 'sex',
				label: '性别'
			},
			{
				prop: 'phone',
				label: '手机号'
			},
			{
				prop: 'email',
				label: '邮箱'
			},
			{
				prop: 'operation',
				label: '操作'
			}
		],
		data: []
	});
	return {
		columnProp
	};
};
