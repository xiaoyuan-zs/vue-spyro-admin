export default {
	path: '/components',
	redirect: '/components/table',
	meta: {
		icon: 'ant-design:gold-outlined',
		sort: 6,
		title: '组件'
	},
	children: [
		{
			path: '/components/table',
			redirect: '/components/table/basicTable',
			meta: {
				icon: 'ant-design:table-outlined',
				title: '表格'
			},
			children: [
				{
					path: '/components/table/basicTable',
					name: 'BasicTable',
					component: () => import('@/views/components/table/basicTable.vue'),
					meta: {
						title: '基础表格',
						// 当只有一个子菜单时需要显示父级菜单时，需开启此配置
						showParent: true
					}
				}
			]
		},
		{
			path: '/components/form',
			redirect: '/components/form/basicForm',
			meta: {
				icon: 'ant-design:table-outlined',
				title: '表单'
			},
			children: [
				{
					path: '/components/form/basicForm',
					name: 'BasicForm',
					component: () => import('@/views/components/table/basicTable.vue'),
					meta: {
						title: '基础表单',
						// 当只有一个子菜单时需要显示父级菜单时，需开启此配置
						showParent: true
					}
				}
			]
		}
	]
} satisfies RouteOption;
