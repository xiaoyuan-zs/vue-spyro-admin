import { buildHierarchyTree, flatTreeToArray } from '@spyro/utils';
import { formatTwoStageRoutes, outerSortAsc } from './utils';
import type { RouteRecordRaw } from 'vue-router';
import constantRoutes from '../modules/constant';

/** 导入modules 下的静态路由 */
const modules: Record<string, any> = import.meta.glob(['../modules/**/*.ts', '!../modules/**/dynamic.ts', '!../modules/**/constant.ts'], {
	eager: true
});

/** 原始静态路由 */
const routes: RouteOption[] = [];
Object.keys(modules).forEach((key) => {
	const route = modules[key].default;
	Array.isArray(route) ? routes.push(...route) : routes.push(route);
});

/** 导出处理后的本地静态路由（三级及以上的路由全部扁平化为二级，为keep-alive缓存使用） */
export const staticRoutes: RouteRecordRaw[] = formatTwoStageRoutes(
	flatTreeToArray(buildHierarchyTree(outerSortAsc(routes.flat(Infinity))))
);

/** 用于渲染本地静态、常量菜单，保持原始层级 */
export const constantMenus = routes.flat(Infinity).concat(constantRoutes) as RouteRecordRaw[];

/** 过滤出常量路由，不参与菜单绘制 */
// export const excludePaths = constantRoutes.map((v) => v.path);
