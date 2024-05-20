const Layout = () => import('@/layouts/index.vue');

export default {
	path: '/',
	name: 'Home',
	component: Layout,
	redirect: '/index',
	meta: {
		title: 'menus.homepage',
		sort: 0
	},
	children: [
		{
			path: '/index',
			name: 'Index',
			component: () => import('@/views/home/index.vue'),
			meta: {
				icon: 'ep:home-filled',
				title: 'menus.homepage',
				isFixed: true
			}
		}
	]
} satisfies RouteOption;
