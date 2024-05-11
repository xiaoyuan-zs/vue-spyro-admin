import { RouteMeta } from 'vue-router';

// 响应
export interface MenuDTO {
	createBy?: string;
	createTime?: string;
	updateBy?: string;
	updateTime?: string;
	deleted?: boolean;
	parentName?: string | null;
	parentId: number;
	children?: MenuDTO[];
	menuId: number;
	menuName: string;
	menuType: string;
	routerName: string;
	orderNum?: number;
	path: string;
	component: string;
	isLink?: boolean;
	linkSrc?: string | null;
	isFrame?: boolean;
	iframeSrc?: string | null;
	permission?: string;
	redirect?: string;
	metaInfo: RouteMeta;
	localesKey: string;
	menuSort: string;
	status: number;
	remark: string;
}

// 菜单树类型
export interface MenuTreeDTO {
	id: number;
	label: string;
	parentId?: number;
	weight?: number;
	children?: MenuTreeDTO[];
}
