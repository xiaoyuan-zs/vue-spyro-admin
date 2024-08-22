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
					component: () => import('@/views/components/table/basic-table/index.vue'),
					meta: {
						title: '基础表格',
						// 当只有一个子菜单时需要显示父级菜单时，需开启此配置
						// showParent: true
						keepAlive: true
					}
				},
				{
					path: '/components/table/useTable',
					name: 'UseTable',
					component: () => import('@/views/components/table/use-table/index.vue'),
					meta: {
						title: 'useTable',
						keepAlive: true
					}
				},
				{
					path: '/components/table/treeTable',
					name: 'TreeTable',
					component: () => import('@/views/components/table/tree-table/index.vue'),
					meta: {
						title: '树形表格',
						keepAlive: true
					}
				},
				{
					path: '/components/table/editTable',
					name: 'EditTable',
					component: () => import('@/views/components/table/edit-table/index.vue'),
					meta: {
						title: '可编辑表格',
						keepAlive: true
					}
				}
			]
		}
	]
} satisfies RouteOption;
