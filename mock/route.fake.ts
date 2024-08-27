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

const routes: Array<RouteOption> = [dashBroadRoute];

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
