import { staticRoutes } from '@/router';
import { filterHiddenTree } from '@/router/utils';
import { defineStore } from 'pinia';
import { PermissionType } from '../types';
import { RouteRecordRaw } from 'vue-router';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionType => ({
		// 静态路由生成菜单
		staticMenus: staticRoutes,
		// 静态、动态路由生成菜单
		wholeMenus: [],
		// 缓存页面
		cachePages: []
	}),
	actions: {
		/**
		 * 合并静态动态路由生成菜单
		 */
		handleWholeMenus(routes: RouteRecordRaw[]) {
			this.wholeMenus = filterHiddenTree(this.staticMenus.concat(routes));
		}
	}
});
