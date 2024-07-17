import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';
import { ElButton, ElInput, ElSelect } from 'element-plus';

interface TableData extends Partial<User> {
	edit?: boolean;
}

// const obj: User = {
// 	username: '',
// 	nickname: '',
// 	sex: 'male',
// 	phone: '',
// 	email: ''
// };

export const useSingleEdit = () => {
	const data: TableData[] = [
		{
			userId: '123456',
			username: 'admin',
			nickname: 'admin',
			sex: 'male',
			phone: '(726) 939-7839 x022',
			email: 'Maida6@hotmail.com',
			edit: false
		},
		{
			userId: 'a0bdf4cc-0441-4908-88b4-6ab391375d80',
			username: 'Litzy.Rath48',
			nickname: 'Dewey Carroll',
			sex: 'male',
			phone: '689.716.7451 x200',
			email: 'Katarina.Klocko78@gmail.com',
			edit: false
		},
		{
			userId: '6eb627ff-c4a3-454d-b0f5-5ff2f10c8ab8',
			username: 'Tressa.Morissette49',
			nickname: 'Terrance Torp',
			sex: 'male',
			phone: '1-535-860-7469',
			email: 'Andreanne.McLaughlin4@hotmail.com',
			edit: false
		}
	];

	const columnProp = reactive<{
		columns: ColumnProps<TableData>[];
		data: TableData[];
	}>({
		data,
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
				label: '邮箱',
				renderer: ({ row }) => <>{row.edit ? <ElInput v-model={row.email} /> : <span>{row.email}</span>}</>
			},
			{
				prop: 'operation',
				label: '操作',
				renderer: ({ row }) => (
					<>
						{row.edit ? (
							<>
								<ElButton type="primary" link onClick={() => handleSave(row)}>
									保存
								</ElButton>
								<ElButton type="primary" link onClick={() => handleCancel(row)}>
									取消
								</ElButton>
							</>
						) : (
							<ElButton type="primary" link onClick={() => handleEdit(row)}>
								修改
							</ElButton>
						)}
					</>
				)
			}
		]
	});

	// 保存
	const handleSave = (row: TableData) => {};

	// 取消
	const handleCancel = (row: TableData) => {
		row = data.find((el) => el.userId === row.userId)!;
		row.edit = false;
	};
	// 编辑
	const handleEdit = (row: TableData) => {
		row.edit = true;
	};

	return {
		columnProp
	};
};
