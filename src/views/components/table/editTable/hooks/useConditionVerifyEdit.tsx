import type { User } from '@/api/user/types';
import type { ColumnProps } from '@/components/SoTable';
import { ElButton, ElFormItem, ElInput, ElOption, ElSelect, ElTooltip } from 'element-plus';
import { clone } from '@spyro/utils';
import { Icon } from '@/components/Icon';

interface TableData extends Partial<User> {
	[key: string]: any;
}

export const useConditionVerifyEdit = () => {
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
		sex: 'female',
		phone: '',
		email: ''
	};

	// 根据条件判断  性别为女 手机号必填， 性别为男，不做要求
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
				renderer: ({ row, $index, column }) => (
					<ElFormItem
						prop={`data[${$index}][${column.property}]`}
						rules={[{ required: row[`${column.property}Required`], message: '请输入用户名', trigger: 'blur' }]}>
						<ElInput v-model={row.username} />
					</ElFormItem>
				)
			},
			{
				prop: 'nickname',
				label: '昵称',
				renderer: ({ row, $index, column }) => (
					<ElFormItem
						prop={`data[${$index}][${column.property}]`}
						rules={[{ required: row[`${column.property}Required`], message: '请输入昵称', trigger: 'blur' }]}>
						<ElInput v-model={row.nickname} />
					</ElFormItem>
				)
			},
			{
				prop: 'sex',
				label: '性别',
				headerRenderer: ({ column }) => (
					<div class="flex-center">
						<span class="text-red">*</span>
						<span>{column.label}</span>
						<ElTooltip effect="dark" content="根据条件判断, 性别为女 手机号必填，性别为男，不做要求" placement="top">
							<Icon name="ep:info-filled" class="ml-1" />
						</ElTooltip>
					</div>
				),
				renderer: ({ row, $index, column }) => (
					<ElFormItem
						prop={`data[${$index}][${column.property}]`}
						rules={[{ required: row[`${column.property}Required`], message: '请选择性别', trigger: 'change' }]}>
						<ElSelect v-model={row.sex} clearable onChange={(value) => sexChange(row, value)}>
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
				renderer: ({ row, $index, column }) => (
					<ElFormItem
						prop={`data[${$index}][${column.property}]`}
						rules={[{ required: row[`${column.property}Required`], message: '请输入手机号', trigger: 'blur' }]}>
						<ElInput v-model={row.phone} />
					</ElFormItem>
				)
			},
			{
				prop: 'email',
				label: '邮箱',
				renderer: ({ row, $index, column }) => (
					<ElFormItem
						prop={`data[${$index}][${column.property}]`}
						rules={[{ required: row[`${column.property}Required`], message: '请输入邮箱', trigger: 'blur' }]}>
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
		Object.keys(obj).forEach((key) => {
			obj[`${key}Required`] = true;
		});
		columnProp.data.push(obj);
	};

	const sexChange = (row: TableData, value: string) => {
		row[`phoneRequired`] = value === 'female';
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
