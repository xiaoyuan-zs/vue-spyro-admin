import type { User } from '@/api/user/types';
import type { RouteRecordRaw } from 'vue-router';

export type PermissionStateType = {
	constantMenus: RouteRecordRaw[];
	permissionMenus: RouteRecordRaw[];
	wholeMenus: RouteRecordRaw[];
};

export type AppStateType = {
	isCollapse: boolean;
	isMobile: boolean;
	reload: boolean;
	language: string;
};

export type UserStateType = {
	accessToken: string;
	refreshToken: string;
	nickname: string;
	userInfo: Partial<User>;
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
