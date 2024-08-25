import { $t } from '@/plugins';

export default {
	path: '/perms',
	redirect: '/perms/perms',
	meta: {
		icon: 'ant-design:verified-outlined',
		title: $t('权限'),
		sort: 7
	},
	children: [
		{
			path: '/perms/perms',
			name: 'Perms',
			component: () => import('@/views/error/403.vue'),
			meta: {
				title: '权限示例',
				keepAlive: true
			}
		},
		{
			path: '/perms/adminPerms',
			name: 'AdminPerms',
			component: () => import('@/views/error/403.vue'),
			meta: {
				title: '管理员可见',
				roles: ['admin'],
				keepAlive: true
			}
		},
		{
			path: '/perms/otherPerms',
			name: 'OtherPerms',
			component: () => import('@/views/error/403.vue'),
			meta: {
				title: '拥有某权限可见',
				perms: ['system:otherPerms:view'],
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
