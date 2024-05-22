// 外链的使用方式
export default [
	{
		path: '/v3',
		name: 'https://cn.vuejs.org/guide/quick-start.html',
		meta: {
			icon: 'ep:box',
			title: 'Vue3 官网2',
			sort: 7
		}
	},
	{
		path: '/link',
		redirect: '/link/v3',
		meta: {
			icon: 'ep:home-filled',
			title: '外链目录',
			sort: 5
		},
		children: [
			{
				// path 必须以 / 开始，后面随意编写
				path: '/link/v3',
				// 随意编写，不能重复
				name: 'https://cn.vuejs.org/guide/quick-start.html',
				meta: {
					title: 'Vue3 官网3',
					showParent: true
				}
			}
		]
	}
] satisfies RouteOption[];
