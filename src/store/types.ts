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

export type TabsMenuType = {
	icon: string;
	name: string;
	path: string;
	title: string;
	isFixed?: boolean;
	isCache?: boolean;
};

export type ContextMenuType = {
	icon: string;
	label: string;
	prop: string;
	show: boolean;
	disabled: boolean;
};
