const IframeView = () => import('@/layouts/iframeView.vue');
// iframe 内嵌的使用方式
export default {
	path: '/iframe',
	redirect: '/iframe/v3',
	meta: {
		icon: 'ep:home-filled',
		title: '内嵌Iframe',
		sort: 4
	},
	children: [
		{
			// path 必须以 / 开始，后面随意编写
			path: '/iframe/v3',
			// 随意编写，不能重复
			name: 'Vue3',
			// 内嵌iframe组件
			component: IframeView,
			meta: {
				title: 'Vue3 官网',
				showParent: true,
				iframeSrc: 'https://cn.vuejs.org/guide/quick-start.html'
			}
		}
	]
} satisfies RouteOption;
