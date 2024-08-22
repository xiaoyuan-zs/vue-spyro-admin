import { $t } from '@/plugins';

const Layout = () => import('@/layouts/index.vue');

export default {
	path: '/',
	name: 'Home',
	// 只需要在首页添加component组件即可，其他路由全部处理为首页的子路由，也是为了实现keepalive缓存
	component: Layout,
	redirect: '/index',
	meta: {
		icon: 'ep:home-filled',
		title: $t('menus.homepage'),
		sort: 0
	},
	children: [
		{
			path: '/index',
			name: 'Index',
			component: () => import('@/views/home/workbench/index.vue'),
			meta: {
				icon: 'ep:platform',
				title: $t('menus.workbench'),
				isFixed: true,
				keepAlive: true
			}
		},
		{
			path: '/analysis',
			name: 'Analysis',
			component: () => import('@/views/home/analysis/index.vue'),
			meta: {
				icon: 'ep:data-analysis',
				title: $t('menus.analysis'),
				keepAlive: true
			}
		}
	]
} satisfies RouteOption;
