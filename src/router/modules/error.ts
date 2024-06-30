export default {
	path: '/error',
	redirect: '/error/403',
	meta: {
		icon: 'ri:information-line',
		title: '异常页面',
		sort: 98
	},
	children: [
		{
			path: '/error/403',
			name: '403',
			component: () => import('@/views/error/403.vue'),
			meta: {
				icon: 'spyro:403',
				title: '403',
				keepAlive: true
			}
		},
		{
			path: '/error/404',
			name: '404',
			component: () => import('@/views/error/404.vue'),
			meta: {
				icon: 'spyro:404',
				title: '404',
				keepAlive: true
			}
		},
		{
			path: '/error/500',
			name: '500',
			component: () => import('@/views/error/500.vue'),
			meta: {
				icon: 'spyro:500',
				title: '500',
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
