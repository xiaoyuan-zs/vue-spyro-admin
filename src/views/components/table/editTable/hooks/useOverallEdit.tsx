import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';

export const useOverallEdit = () => {
	const columnProp = reactive<{
		name: string;
		columns: ColumnProps<User>[];
	}>({
		name: 'overallEdit',
		columns: []
	});
	return {
		columnProp
	};
};
