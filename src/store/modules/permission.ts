import { constantMenus } from '@/router';
import { filterHiddenTree, outerSortAsc } from '@/router/helpers/utils';
import { defineStore } from 'pinia';
import type { PermissionStateType } from '../types';
import type { RouteRecordRaw } from 'vue-router';
import { flatTreeToArray } from '@/utils/tree';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionStateType => ({
		// 静态路由生成菜单
		constantMenus: constantMenus,
		// 静态、动态路由生成菜单
		wholeMenus: [],
		// 缓存页面
		cachePages: []
	}),
	getters: {
		// 扁平化菜单
		flatMenus: (state) => flatTreeToArray(state.wholeMenus)
	},
	actions: {
		/**
		 * 合并静态动态路由生成菜单
		 */
		handleWholeMenus(routes: RouteRecordRaw[]) {
			this.wholeMenus = filterHiddenTree(outerSortAsc(this.constantMenus.concat(routes)));
		}
	}
});
