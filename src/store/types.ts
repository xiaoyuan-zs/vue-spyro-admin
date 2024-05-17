import { RouteRecordRaw } from 'vue-router';

export type PermissionType = {
	constantMenus: RouteRecordRaw[];
	wholeMenus: RouteRecordRaw[];
	cachePages: string[];
};

export type AppType = {
	isCollapse: boolean;
	isMobile: boolean;
	reload: boolean;
	language: string;
};
