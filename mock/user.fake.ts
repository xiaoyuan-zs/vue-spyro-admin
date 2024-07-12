import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { faker } from '@faker-js/faker';
import { verifyIdentity } from './verifyJwt';

export function createRandomUser() {
	return {
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
		role: ['common'],
		createBy: 'admin',
		remark: faker.string.sample()
	};
}

// 伪造随机数据
export const fakeUsers = faker.helpers.multiple(createRandomUser, { count: 30 });

// 导出类型
export type User = (typeof fakeUsers)[0];

// 管理员数据
export const users: User[] = [
	{
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
		role: ['admin'],
		createBy: 'admin',
		remark: '我是管理员'
	},
	...fakeUsers
];

export default defineFakeRoute([
	{
		url: '/users',
		method: 'GET',
		response: ({ query, headers }) => {
			const { flag, data } = verifyIdentity(headers.authorization!, 'access');
			if (!flag) return data;
			const { pageNum = 1, pageSize = 10, username, nickname, email, phone } = query;
			const list = users.slice((Number(pageNum) - 1) * Number(pageSize), Number(pageSize) * Number(pageNum));
			return {
				code: 200,
				data: list,
				total: users.length,
				message: '操作成功'
			};
		}
	},
	{
		url: '/users/:id',
		method: 'GET',
		response: ({ params, headers }) => {
			const { flag, data } = verifyIdentity(headers.authorization!, 'access');
			if (!flag) return data;
			const { id } = params;
			const user = users.find((el) => el.userId === id);
			return {
				code: 200,
				data: user,
				message: '操作成功'
			};
		}
	}
]);
