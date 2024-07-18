import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';
import { ElButton, ElInput, ElOption, ElSelect } from 'element-plus';
import { clone, selectDictLabel } from '@spyro/utils';
import { Icon } from '@/components/Icon';

interface TableData extends Partial<User> {
	edit?: boolean;
	single?: boolean;
}

// const obj: User = {
// 	username: '',
// 	nickname: '',
// 	sex: 'male',
// 	phone: '',
// 	email: ''
// };

export const useSingleEdit = () => {
	// 性别字典
	const sexOptions = reactive([
		{
			dictLabel: '男',
			dictValue: 'male'
		},
		{
			dictLabel: '女',
			dictValue: 'female'
		}
	]);
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
			edit: false,
			single: false
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
		data: clone(data, true),
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
				},
				renderer: ({ row }) => <>{row.edit ? <ElInput v-model={row.username} /> : <span>{row.username}</span>}</>
			},
			{
				prop: 'nickname',
				label: '昵称',
				renderer: ({ row }) => (
					<span class="flex items-center w-full">
						<span class="flex-1 mr-1">{row.edit || row.single ? <ElInput v-model={row.nickname} /> : <span>{row.nickname}</span>}</span>
						<span onClick={() => handleSingle(row)}>
							<Icon class="cursor-pointer hover:text-primary" name="ep:edit" size={16} />
						</span>
					</span>
				)
			},
			{
				prop: 'sex',
				label: '性别',
				renderer: ({ row }) => (
					<>
						{row.edit ? (
							<ElSelect v-model={row.sex}>
								{sexOptions.map((dict) => (
									<ElOption key={dict.dictValue} label={dict.dictLabel} value={dict.dictValue} />
								))}
							</ElSelect>
						) : (
							<span>{selectDictLabel(sexOptions, row.sex!)}</span>
						)}
					</>
				)
			},
			{
				prop: 'phone',
				label: '手机号',
				renderer: ({ row }) => <>{row.edit ? <ElInput v-model={row.phone} /> : <span>{row.phone}</span>}</>
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
	const handleSave = (row: TableData) => {
		const index = data.findIndex((el) => el.userId === row.userId);
		if (index > -1) data[index] = Object.assign(data[index], clone(row, true));
		row.edit = false;
	};

	// 取消
	const handleCancel = (row: TableData) => {
		const item = data.find((el) => el.userId === row.userId);
		if (item) row = Object.assign(row, item);
		row.edit = false;
	};
	// 编辑
	const handleEdit = (row: TableData) => {
		row.edit = true;
	};

	const handleSingle = (row: TableData) => {
		row.single = !row.single;
	};

	return {
		columnProp
	};
};
