const Layout = () => import('@/layouts/index.vue');

export default [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录'
		}
	},
	{
		path: '/redirect',
		component: Layout,
		meta: {
			title: '加载中...'
		},
		children: [
			{
				path: '/redirect/:path(.*)',
				name: 'Redirect',
				component: () => import('@/views/redirect/index.vue')
			}
		]
	}
] satisfies Array<RouteOptionConfig>;
