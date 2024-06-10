const Layout = () => import('@/layouts/index.vue');

export default {
	path: '/',
	name: 'Home',
	// 只需要在首页添加component组件即可，其他路由全部处理为首页的子路由，也是为了实现keepalive缓存
	component: Layout,
	redirect: '/index',
	meta: {
		icon: 'ep:home-filled',
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
