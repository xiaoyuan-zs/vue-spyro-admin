import { constantMenus } from '@/router';
import { filterHiddenTree, outerSortAsc } from '@/router/utils';
import { defineStore } from 'pinia';
import { PermissionType } from '../types';
import { RouteRecordRaw } from 'vue-router';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionType => ({
		// 静态路由生成菜单
		constantMenus: constantMenus,
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
			this.wholeMenus = filterHiddenTree(outerSortAsc(this.constantMenus.concat(routes)));
		}
	}
});
