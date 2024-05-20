import { constantMenus } from '@/router';
import { filterHiddenTree, outerSortAsc } from '@/router/helpers/utils';
import { defineStore } from 'pinia';
import { PermissionType } from '../types';
import { RouteRecordRaw } from 'vue-router';
import { flatTreeToArray } from '@/utils/tree';

export const usePermissionStore = defineStore('permission', {
	state: (): PermissionType => ({
		// 静态路由生成菜单
		constantMenus: constantMenus,
		// 静态、动态路由生成菜单
		wholeMenus: [],
		// 缓存页面
		cachePages: []
	}),
	getters: {
		// 扁平化菜单
		flatMenus(state) {
			return flatTreeToArray(state.wholeMenus);
		}
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
