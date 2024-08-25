import { $t } from '@/plugins';

export default {
	path: '/table',
	redirect: '/table/basicTable',
	meta: {
		icon: 'ant-design:gold-outlined',
		sort: 6,
		title: $t('menus.table')
	},
	children: [
		{
			path: '/table/basicTable',
			name: 'BasicTable',
			component: () => import('@/views/components/table/basic-table/index.vue'),
			meta: {
				title: $t('menus.basicTable'),
				// 当只有一个子菜单时需要显示父级菜单时，需开启此配置
				// showParent: true
				keepAlive: true
			}
		},
		{
			path: '/table/useTable',
			name: 'UseTable',
			component: () => import('@/views/components/table/use-table/index.vue'),
			meta: {
				title: $t('menus.useTable'),
				keepAlive: true
			}
		},
		{
			path: '/table/treeTable',
			name: 'TreeTable',
			component: () => import('@/views/components/table/tree-table/index.vue'),
			meta: {
				title: $t('menus.treeTable'),
				keepAlive: true
			}
		},
		{
			path: '/table/editTable',
			name: 'EditTable',
			component: () => import('@/views/components/table/edit-table/index.vue'),
			meta: {
				title: $t('menus.editTable'),
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
