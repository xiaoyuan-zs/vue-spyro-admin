import { buildHierarchyTree, flatTreeToArray } from '@spyro/utils';
import { formatTwoStageRoutes } from './utils';
import type { RouteRecordRaw } from 'vue-router';
import constantRoutes from '../modules/constant';
import dynamicRoutes from '../modules/dynamic';

/** 导入modules 下的静态路由 */
// const modules: Record<string, any> = import.meta.glob(['../modules/**/*.ts', '!../modules/**/constant.ts'], {
const modules: Record<string, any> = import.meta.glob(['../modules/static/**/*.ts'], {
	eager: true
});

/** 原始静态路由 */
const routes: RouteOption[] = [];
Object.keys(modules).forEach((key) => {
	const route = modules[key].default;
	Array.isArray(route) ? routes.push(...route) : routes.push(route);
});

/**
 * 导出处理后的本地静态路由（三级及以上的路由全部扁平化为二级，为keep-alive缓存使用）
 * 对routes进行扁平化，排序，构建成需要格式的树结构，再转为一维数组，然后全部扁平为二级嵌套路由（keep-alive 只支持到二级缓存）
 */
export const staticRoutes: RouteRecordRaw[] = formatTwoStageRoutes(flatTreeToArray(buildHierarchyTree(routes.flat(Infinity))));

/** 本地动态权限路由 */
export const permissionRoutes: RouteRecordRaw[] = flatTreeToArray(buildHierarchyTree(dynamicRoutes.flat(Infinity)));

/** 用于渲染侧边栏本地静态、常量菜单，保持原始层级 */
export const constantMenus = routes.flat(Infinity).concat(constantRoutes) as RouteRecordRaw[];

/** 用于渲染侧边栏本地动态权限菜单，保持原始层级 */
export const permissionMenus = dynamicRoutes.flat(Infinity) as RouteRecordRaw[];
