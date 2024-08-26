import router from '@/router';
import { defineStore } from 'pinia';
import { constantMenus } from '@/router/helpers/process';
import { dynamicRoutes } from '@/router/modules/dynamic';
import { filterHiddenTree, outerSortAsc, filterDynamicRoutes } from '@/router/helpers/utils';
import { flatTreeToArray } from '@spyro/utils';
import type { PermissionStateType } from '../types';
import type { RouteRecordRaw } from 'vue-router';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionStateType => ({
		// 静态路由生成菜单
		constantMenus: constantMenus,
		// 静态、动态路由生成菜单
		wholeMenus: []
	}),
	getters: {
		// 扁平化菜单
		flatMenus: (state) => flatTreeToArray(state.wholeMenus),
		// 缓存页面
		cachePages(): string[] {
			return this.flatMenus.filter((item) => item.meta?.keepAlive).map((item) => item.name as string);
		}
	},
	actions: {
		/**
		 * 合并静态动态路由生成菜单
		 */
		handleWholeMenus(routes: RouteRecordRaw[]) {
			// 动态路由验证权限并注册
			const asyncRoutes = filterDynamicRoutes(dynamicRoutes as RouteRecordRaw[]);
			asyncRoutes.forEach((route) => {
				router.addRoute(route);
			});
			// 获取动态和静态路由菜单
			this.wholeMenus = filterHiddenTree(outerSortAsc(this.constantMenus.concat(asyncRoutes).concat(routes)));
		}
	}
});
