import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { faker } from '@faker-js/faker';
import { verifyAccessToken } from './verifyJwt';

type TreeNode = {
	id: string;
	label: string;
	sex: string;
	status: boolean;
	avatar: string;
	phone: string;
	email: string;
	children: TreeNode[];
};

// 定义一个生成随机树节点的辅助函数
function generateTree(depth: number = 1, width: number = 1) {
	function createNode(depth: number) {
		const children: TreeNode[] = [];
		if (depth > 0) {
			width = Math.max(1, width - 1);
			for (let i = 0; i < width; i++) {
				children.push(createNode(depth - 1));
			}
		}
		return {
			id: faker.string.uuid(),
			label: faker.lorem.sentence(),
			sex: faker.person.sexType(),
			status: faker.datatype.boolean(),
			avatar: faker.image.avatar(),
			phone: faker.phone.number(),
			email: faker.internet.email(),
			children
		};
	}
	return createNode(depth);
}
// 定义一个生成多个随机树节点的辅助函数
function generateManyTree(width: number = 0) {
	if (width === 0) {
		return [];
	}
	const children: TreeNode[] = [];
	for (let i = 0; i < width; i++) {
		children.push(generateTree(Math.floor(Math.random() * 2), Math.floor(Math.random() * 5)));
	}
	return children;
}

export default defineFakeRoute([
	{
		url: '/trees',
		method: 'GET',
		response: ({ headers }) => {
			const result = verifyAccessToken(headers.authorization!);
			if (!result.verify) {
				return {
					code: 401,
					...result.err
				};
			}
			return {
				code: 200,
				data: generateManyTree(30),
				message: '操作成功'
			};
		}
	}
]);
