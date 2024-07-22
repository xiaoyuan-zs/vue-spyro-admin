import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';
import { ElButton, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus';
import { clone } from '@spyro/utils';

interface TableData extends Partial<User> {}

export const useVerifyEdit = () => {
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

	const data: TableData = {
		username: '',
		nickname: '',
		sex: 'male',
		phone: '',
		email: ''
	};

	const columnProp = reactive<{
		columns: ColumnProps<TableData>[];
		data: TableData[];
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
				headerRenderer: ({ column }) => (
					<>
						<span class="text-red">*</span>
						<span>{column.label}</span>
					</>
				),
				renderer: ({ row, $index, column }) => (
					<ElFormItem prop={`data[${$index}][${column.property}]`} rules={[{ required: true, message: '请输入用户名', trigger: 'blur' }]}>
						<ElInput v-model={row.username} />
					</ElFormItem>
				)
			},
			{
				prop: 'nickname',
				label: '昵称',
				headerRenderer: ({ column }) => (
					<>
						<span class="text-red">*</span>
						<span>{column.label}</span>
					</>
				),
				renderer: ({ row, $index, column }) => (
					<ElFormItem prop={`data[${$index}][${column.property}]`} rules={[{ required: true, message: '请输入昵称', trigger: 'blur' }]}>
						<ElInput v-model={row.nickname} />
					</ElFormItem>
				)
			},
			{
				prop: 'sex',
				label: '性别',
				headerRenderer: ({ column }) => (
					<>
						<span class="text-red">*</span>
						<span>{column.label}</span>
					</>
				),
				renderer: ({ row, $index, column }) => (
					<ElFormItem prop={`data[${$index}][${column.property}]`} rules={[{ required: true, message: '请选择性别', trigger: 'change' }]}>
						<ElSelect v-model={row.sex} clearable>
							{sexOptions.map((dict) => (
								<ElOption key={dict.dictValue} label={dict.dictLabel} value={dict.dictValue} />
							))}
						</ElSelect>
					</ElFormItem>
				)
			},
			{
				prop: 'phone',
				label: '手机号',
				headerRenderer: ({ column }) => (
					<>
						<span class="text-red">*</span>
						<span>{column.label}</span>
					</>
				),
				renderer: ({ row, $index, column }) => (
					<ElFormItem prop={`data[${$index}][${column.property}]`} rules={[{ required: true, message: '请输入手机号', trigger: 'blur' }]}>
						<ElInput v-model={row.phone} />
					</ElFormItem>
				)
			},
			{
				prop: 'email',
				label: '邮箱',
				renderer: ({ row, $index, column }) => (
					<ElFormItem prop={`data[${$index}][${column.property}]`} rules={[{ required: false, message: '请输入邮箱', trigger: 'blur' }]}>
						<ElInput v-model={row.email} />
					</ElFormItem>
				)
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
