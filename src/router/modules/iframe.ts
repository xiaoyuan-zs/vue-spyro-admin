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
				icon: 'ep:apple',
				title: 'Vue3 官网',
				// showParent: true, // 只有一个子级需要开启该配置
				iframeSrc: 'https://cn.vuejs.org/guide/quick-start.html'
			}
		},
		{
			// path 必须以 / 开始，后面随意编写
			path: '/iframe/vite',
			// 随意编写，不能重复
			name: 'Vite',
			// 内嵌iframe组件
			component: IframeView,
			meta: {
				icon: 'ant-design:alipay-circle-outlined',
				title: 'vite 官网',
				iframeSrc: 'https://cn.vitejs.dev/'
			}
		}
	]
} satisfies RouteOption;
