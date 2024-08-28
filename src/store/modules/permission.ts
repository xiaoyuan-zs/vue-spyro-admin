import { defineStore } from 'pinia';
import { constantMenus, permissionMenus } from '@/router/helpers/process';
import { filterDynamicRoutes, filterHiddenTree, outerSortAsc } from '@/router/helpers/utils';
import { flatTreeToArray, clone } from '@spyro/utils';
import type { PermissionStateType } from '../types';
import type { RouteRecordRaw } from 'vue-router';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionStateType => ({
		// 静态路由生成菜单
		constantMenus: constantMenus,
		// 动态权限路由生成菜单
		permissionMenus: permissionMenus,
		// 静态、动态、异步路由生成菜单
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
		 * 合并静态、动态、异步路由生成菜单
		 */
		handleWholeMenusActions(routes: RouteRecordRaw[]) {
			// 处理动态权限路由
			const dynamicRoutes = filterDynamicRoutes(clone(permissionMenus, true));
			this.wholeMenus = filterHiddenTree(clone(outerSortAsc(this.constantMenus.concat(routes).concat(dynamicRoutes)), true));
		}
	}
});
