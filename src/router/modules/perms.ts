import { $t } from '@/plugins';

export default {
	path: '/permissions',
	redirect: '/permissions/permissions',
	meta: {
		icon: 'ant-design:verified-outlined',
		title: $t('menus.permissions'),
		sort: 7
	},
	children: [
		{
			path: '/permissions/permissions',
			name: 'Permissions',
			component: () => import('@/views/permission/example/index.vue'),
			meta: {
				title: $t('menus.permissionsExample'),
				keepAlive: true
			}
		},
		{
			path: '/permissions/adminVisible',
			name: 'AdminVisible',
			component: () => import('@/views/permission/admin-visible/index.vue'),
			meta: {
				title: $t('menus.adminVisible'),
				roles: ['admin'],
				keepAlive: true
			}
		},
		{
			path: '/permissions/permVisibleVisible',
			name: 'PermVisible',
			component: () => import('@/views/permission/permission-visible/index.vue'),
			meta: {
				title: $t('menus.permissionVisible'),
				permissions: ['system:permissions:view'],
				keepAlive: true,
				hidden: true
			}
		}
	]
} satisfies RouteOption;
