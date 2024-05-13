import { buildHierarchyTree, flatTreeToArray } from '@/utils/tree';
import { formatTwoStageRoutes } from './utils';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

// 导入modules 下的静态路由
const modules: Record<string, any> = import.meta.glob(['./modules/**/*.ts', '!./modules/**/constant.ts', '!./modules/**/dynamic.ts'], {
	eager: true
});

// 原始静态路由
const routes: RouteOptionConfig[] = [];
Object.keys(modules).forEach((key) => {
	routes.push(modules[key].default);
});

console.log(111, flatTreeToArray(buildHierarchyTree(routes.flat(Infinity))));

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
// export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(flatTreeToArray(buildHierarchyTree(routes.flat(Infinity))));

// console.table(constantRoutes);

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [],
	scrollBehavior: () => ({ top: 0, left: 0 })
});

export const resetRouter = (): void => {
	const resetWhiteNameList = ['Login'];
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name && !resetWhiteNameList.includes(name as string)) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
};
export default router;
