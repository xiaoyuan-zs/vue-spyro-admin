import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { faker } from '@faker-js/faker';
import { verifyIdentity } from './verifyJwt';

const adminUser = {
	userId: '123456',
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
};
// 导出类型
export type User = typeof adminUser;

// 管理员数据
export const users: User[] = [adminUser, ...fakeUsers()];

function fakeUsers() {
	const users: User[] = [];
	for (let i = 0; i < 10; i++) {
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

export default defineFakeRoute([
	{
		url: '/users',
		method: 'GET',
		response: ({ headers }) => {
			const { flag, data } = verifyIdentity(headers.authorization!, 'access');
			if (!flag) return data;
			return {
				code: 200,
				data: users,
				message: '操作成功'
			};
		}
	}
]);
