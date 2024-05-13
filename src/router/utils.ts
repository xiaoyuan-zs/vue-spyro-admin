import { RouteRecordRaw } from 'vue-router';

// 导入views 下的所有 vue 或 tsx
const modulesRoutes = import.meta.glob('/src/views/**/*.{vue,tsx}');

function handRank(routeInfo: any) {
	const { name, path, parentId, meta } = routeInfo;
	return isN(parentId) ? (isAllEmpty(meta?.rank) || (meta?.rank === 0 && name !== 'Home' && path !== '/') ? true : false) : false;
}

/**
 * 按照路由中meta下的rank字段升序来排序路由
 * @param routes 数组
 * @returns array
 */
function ascending(routes: any[]) {}

/**
 * 一维数组处理成多级嵌套数组（三级及以上的路由全部扁平为二级，keep-alive 只支持到二级缓存）
 * @param routesList 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成规定路由的格式
 */
function formatTwoStageRoutes(routesList: RouteRecordRaw[]) {
	if (routesList.length === 0) return routesList;
	const newRoutesList: RouteRecordRaw[] = [];
	routesList.forEach((v: RouteRecordRaw) => {
		if (v.path === '/') {
			newRoutesList.push({
				component: v.component,
				name: v.name,
				path: v.path,
				redirect: v.redirect,
				meta: v.meta,
				children: []
			});
		} else {
			newRoutesList[0]?.children!.push({ ...v });
		}
	});
	return newRoutesList;
}

export { formatTwoStageRoutes };
