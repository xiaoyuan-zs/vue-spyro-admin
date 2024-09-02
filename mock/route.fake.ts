import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import { $t } from '@/plugins/i18n';

const dashBroadRoute: RouteOption = {
	path: '/dashboard',
	name: 'Dashboard',
	component: 'dashboard/index',
	meta: {
		icon: 'ep:data-board',
		title: $t('menus.dataScreen'),
		roles: ['admin'],
		sort: 1
	}
};

const componentsRoute: RouteOption = {
	path: '/components',
	name: 'Components',
	component: 'components/index',
	meta: {
		icon: 'ep:component',
		title: $t('menus.component'),
		sort: 8
	},
	children: []
};

const routes: Array<RouteOption> = [dashBroadRoute, componentsRoute];

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
