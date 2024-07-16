import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';

export const useSingleEdit = () => {
	const columnProp = reactive<{
		columns: ColumnProps<User>[];
	}>({
		columns: [
			{
				prop: 'nickname',
				label: '用户名称'
			}
		]
	});
	return {
		columnProp
	};
};
