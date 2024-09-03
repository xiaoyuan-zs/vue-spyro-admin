import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { $t } from '@/plugins/i18n';

const componentsRoute: RouteOption[] = [
	{
		path: '/table',
		redirect: '/table/basicTable',
		meta: {
			icon: 'ant-design:gold-outlined',
			sort: 6,
			title: $t('menus.table')
		},
		children: [
			{
				path: '/table/basicTable',
				name: 'BasicTable',
				component: 'components/table/basic-table/index',
				meta: {
					title: $t('menus.basicTable'),
					// 当只有一个子菜单时需要显示父级菜单时，需开启此配置
					// showParent: true
					keepAlive: true
				}
			},
			{
				path: '/table/useTable',
				name: 'UseTable',
				component: 'components/table/use-table/index',
				meta: {
					title: $t('menus.useTable'),
					keepAlive: true
				}
			},
			{
				path: '/table/treeTable',
				name: 'TreeTable',
				component: 'components/table/tree-table/index',
				meta: {
					title: $t('menus.treeTable'),
					keepAlive: true
				}
			},
			{
				path: '/table/editTable',
				name: 'EditTable',
				component: 'components/table/edit-table/index',
				meta: {
					title: $t('menus.editTable'),
					keepAlive: true
				}
			}
		]
	}
];

const routes: Array<RouteOption> = componentsRoute;

export default defineFakeRoute([
	{
		url: '/getAsyncRoutes',
		method: 'GET',
		response: () => {
			return {
				code: 200,
				data: routes,
				message: '操作成功'
			};
		}
	}
]);
