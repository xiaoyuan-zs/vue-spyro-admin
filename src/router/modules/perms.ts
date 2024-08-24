import { $t } from '@/plugins';

export default {
	path: '/perms',
	redirect: '/perms/ceshi',
	meta: {
		icon: 'ri:information-line',
		title: $t('权限字符'),
		sort: 7
	},
	children: [
		{
			path: '/perms/ceshi',
			name: 'Ceshi',
			component: () => import('@/views/error/403.vue'),
			meta: {
				title: '测试',
				perms: ['system:ceshi:view'],
				roles: ['ceshi'],
				showParent: true,
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
