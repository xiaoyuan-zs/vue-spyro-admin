import { $t } from '@/plugins';

export default {
	path: '/error',
	redirect: '/error/403',
	meta: {
		icon: 'ri:information-line',
		title: $t('menus.exception'),
		sort: 98
	},
	children: [
		{
			path: '/error/403',
			name: 'Error403',
			component: () => import('@/views/error/403.vue'),
			meta: {
				title: '403',
				keepAlive: true
			}
		},
		{
			path: '/error/404',
			name: 'Error404',
			component: () => import('@/views/error/404.vue'),
			meta: {
				title: '404',
				keepAlive: true
			}
		},
		{
			path: '/error/500',
			name: 'Error500',
			component: () => import('@/views/error/500.vue'),
			meta: {
				title: '500',
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
