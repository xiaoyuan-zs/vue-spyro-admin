import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { faker } from '@faker-js/faker';

// 登录账号
export const loginUser = [
	{
		userId: '1234567890',
		username: 'admin',
		nickname: 'admin',
		password: 'admin123',
		sex: faker.person.sexType(),
		status: faker.datatype.boolean(),
		avatar: faker.image.avatar(),
		phone: faker.phone.number(),
		email: faker.internet.email(),
		createTime: faker.date.anytime(),
		roles: ['admin'],
		permissions: ['*:*:*'],
		createBy: 'admin',
		remark: '我是管理员'
	},
	{
		userId: '1234567891',
		username: 'common',
		nickname: 'common',
		password: 'admin123',
		sex: faker.person.sexType(),
		status: faker.datatype.boolean(),
		avatar: faker.image.avatar(),
		phone: faker.phone.number(),
		email: faker.internet.email(),
		createTime: faker.date.anytime(),
		roles: ['common'],
		permissions: ['common:permissions:view'],
		createBy: 'admin',
		remark: '我是common角色'
	},
	{
		userId: '1234567892',
		username: 'normal',
		nickname: 'normal',
		password: 'admin123',
		sex: faker.person.sexType(),
		status: faker.datatype.boolean(),
		avatar: faker.image.avatar(),
		phone: faker.phone.number(),
		email: faker.internet.email(),
		createTime: faker.date.anytime(),
		roles: ['normal'],
		permissions: ['normal:permissions:view'],
		createBy: 'admin',
		remark: '我是normal角色'
	}
];
// 导出类型
export type User = (typeof loginUser)[0];

// 生成随机10条用户数据
function fakeUsers() {
	const users: User[] = [];
	for (let i = 0; i <= 10; i++) {
		users.push({
			userId: faker.string.uuid(),
			username: faker.internet.userName(),
			nickname: faker.person.fullName(),
			password: 'admin123',
			sex: faker.person.sexType(),
			status: faker.datatype.boolean(),
			avatar: faker.image.avatar(),
			phone: faker.phone.number(),
			email: faker.internet.email(),
			createTime: faker.date.anytime(),
			roles: ['common'],
			permissions: ['system:permission:view'],
			createBy: 'admin',
			remark: faker.string.sample()
		});
	}
	return users;
}

const users = fakeUsers();

export default defineFakeRoute([
	{
		url: '/users',
		method: 'GET',
		response: () => {
			return {
				code: 200,
				data: users,
				message: '操作成功'
			};
		}
	}
]);
