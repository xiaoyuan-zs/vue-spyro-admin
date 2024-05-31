const Layout = () => import('@/layouts/index.vue');

export default [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
			hidden: true
		}
	},
	{
		path: '/redirect',
		component: Layout,
		redirect: '/redirect/:path(.*)',
		meta: {
			title: '加载中...',
			hidden: true
		},
		children: [
			{
				path: '/redirect/:path(.*)',
				name: 'Redirect',
				component: () => import('@/views/redirect/index.vue')
			}
		]
	}
] satisfies Array<RouteOption>;
