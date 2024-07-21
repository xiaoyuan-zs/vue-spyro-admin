import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';
import { ElButton, ElInput, ElOption, ElSelect } from 'element-plus';
import { clone } from '@spyro/utils';

export const useOverallEdit = () => {
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

	const data: Partial<User> = {
		username: '',
		nickname: '',
		sex: 'male',
		phone: '',
		email: ''
	};

	const columnProp = reactive<{
		columns: ColumnProps<Partial<User>>[];
		data: Partial<User>[];
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
				},
				renderer: ({ row }) => <ElInput v-model={row.username} />
			},
			{
				prop: 'nickname',
				label: '昵称',
				renderer: ({ row }) => <ElInput v-model={row.nickname} />
			},
			{
				prop: 'sex',
				label: '性别',
				renderer: ({ row }) => (
					<ElSelect v-model={row.sex}>
						{sexOptions.map((dict) => (
							<ElOption key={dict.dictValue} label={dict.dictLabel} value={dict.dictValue} />
						))}
					</ElSelect>
				)
			},
			{
				prop: 'phone',
				label: '手机号',
				renderer: ({ row }) => <ElInput v-model={row.phone} />
			},
			{
				prop: 'email',
				label: '邮箱',
				renderer: ({ row }) => <ElInput v-model={row.email} />
			},
			{
				prop: 'operation',
				label: '操作',
				renderer: ({ $index }) => (
					<span>
						{columnProp.data.length - 1 === $index || columnProp.data.length === 1 ? (
							<ElButton type="primary" link onClick={() => handleAdd()}>
								新增
							</ElButton>
						) : undefined}
						{columnProp.data.length > 1 ? (
							<ElButton type="primary" link onClick={() => handleDelete($index)}>
								删除
							</ElButton>
						) : undefined}
					</span>
				)
			}
		],
		data: []
	});

	const handleAdd = () => {
		const obj = clone(data, true);
		columnProp.data.push(obj);
	};

	// 删除
	const handleDelete = ($index: number) => {
		columnProp.data.splice($index, 1);
	};

	onMounted(() => {
		handleAdd();
	});

	return {
		columnProp
	};
};
