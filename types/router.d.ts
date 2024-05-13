import { defineComponent } from 'vue';
import { RouteComponent, RouteRecordRaw } from 'vue-router';

declare global {
	// 定义组件类型
	type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>);

	/**
	 * @description 子路由 meta 配置
	 */
	interface CustomizeRouteMeta {
		// 菜单图标
		icon?: string;
		// 菜单标题
		title?: string;
		// 是否隐藏某个菜单
		hidden?: boolean;
		// 是否显示父级菜单
		showParent?: boolean;
		// 跳转到子级菜单是否选中父级菜单
		activeMenu?: string;
		// 是否固定标签页
		isFixed?: boolean;
		// 需要内嵌的iframe链接地址
		iframeSrc?: string;
		// 页面级别权限设置
		roles?: string[];
		// 按钮级别权限设置
		perms?: string[];
		// 页面是否缓存
		keepAlive?: boolean;
		// 页面路由动画
		transition?: {
			// 动画名称
			name?: string;
			// 进场动画
			enterTransition?: string;
			// 离场动画
			leaveTransition?: string;
		};
	}

	/**
	 * @description 子路由（菜单）配置
	 */
	type RouteChildOptionConfig = {
		path: string;
		name?: string;
		redirect?: string;
		component?: Component | RouteComponent;
		meta?: CustomizeRouteMeta;
		children?: RouteChildOptionConfig[];
	};

	/**
	 * @description 父级路由（目录） 配置
	 */
	type RouteOptionConfig = {
		path: string;
		name?: string;
		redirect?: string;
		component?: Component | RouteComponent;
		meta?: {
			// 菜单图标
			icon?: string;
			// 菜单标题
			title?: string;
			// 是否隐藏某个菜单
			hidden?: boolean;
			// 菜单升序排序（只针对顶级路由）
			rank?: number;
		};
		children?: RouteChildOptionConfig[];
	} & RouteRecordRaw;
}

declare module 'vue-router' {
	interface RouteMeta extends ChildRouteMeta {}
}
