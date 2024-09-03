import { $t } from '@/plugins';
const Layout = () => import('@/layouts/index.vue');

export default [
	{
		path: '/permissions',
		redirect: '/permissions/permissions',
		component: Layout,
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
					showParent: true,
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
					permissions: ['common:permissions:view'],
					keepAlive: true,
					hidden: true
				}
			}
		]
	}
] satisfies Array<RouteOption>;
