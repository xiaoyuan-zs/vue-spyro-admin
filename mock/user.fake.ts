import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { faker } from '@faker-js/faker';

export function createRandomUser() {
	return {
		userId: faker.string.uuid(),
		username: faker.internet.userName(),
		nickname: faker.person.fullName(),
		password: 'admin123',
		sex: faker.person.sexType(),
		status: faker.datatype.boolean(),
		avatar: faker.image.avatar(),
		email: faker.internet.email(),
		createTime: faker.date.anytime(),
		role: ['common'],
		createBy: 'admin',
		remark: faker.string.sample()
	};
}

// 伪造随机数据
export const fakeUsers = faker.helpers.multiple(createRandomUser, { count: 30 });

// 导出类型
export type User = typeof fakeUsers;

// 管理员数据
export const users: User = [
	{
		userId: '540000200805062762',
		username: 'admin',
		nickname: 'admin',
		password: 'admin123',
		sex: 'male',
		status: true,
		avatar: 'http://dummyimage.com/200x200',
		email: 't.piwr@fzfwhyvjqw.tv',
		role: ['admin'],
		createTime: new Date(),
		createBy: 'admin',
		remark: '我是管理员'
	},
	...fakeUsers
];

export default defineFakeRoute([
	{
		url: '/mock/users',
		method: 'GET',
		response: () => {
			return {
				code: 200,
				data: users,
				total: users.length,
				message: '操作成功'
			};
		}
	}
]);
