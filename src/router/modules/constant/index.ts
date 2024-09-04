// import { $t } from '@/plugins';
const Layout = () => import('@/layouts/index.vue');

export default [
	// {
	// 	path: '/dashboard',
	// 	name: 'Dashboard',
	// 	component: () => import('@/views/dashboard/index.vue'),
	// 	meta: {
	// 		icon: 'ep:data-board',
	// 		title: $t('menus.dataScreen'),
	// 		sort: 1
	// 	}
	// },
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
	},
	{
		path: '/403',
		name: '403',
		component: () => import('@/views/error/403.vue'),
		meta: {
			title: '403',
			hidden: true
		}
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/error/404.vue'),
		meta: {
			title: '404',
			hidden: true
		}
	},
	{
		path: '/500',
		name: '500',
		component: () => import('@/views/error/500.vue'),
		meta: {
			title: '500',
			hidden: true
		}
	}
] satisfies Array<RouteOption>;
