import type { defineComponent } from 'vue';
import type { RouteComponent } from 'vue-router';

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
		// 页面级别权限设置 ['admin', 'common']
		roles?: string[];
		// 菜单级别权限设置 ['*:*:*']
		permissions?: string[];
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
	 * 菜单配置
	 */
	interface MenuOption {
		id?: number;
		name?: string;
		path?: string;
		noShowingChildren?: boolean;
		children?: MenuOption[];
		value: unknown;
		meta?: {
			icon?: string;
			title?: string;
			sort?: number;
			showParent?: boolean;
		};
		parentId?: number;
		pathList?: number[];
		redirect?: string;
	}

	/**
	 * @description 子级路由（目录） 配置
	 */
	type RouteChildrenOption = {
		path: string;
		name?: string;
		redirect?: string;
		component?: Component | RouteComponent;
		meta?: CustomizeRouteMeta;
		children?: RouteChildrenOption[];
	};

	/**
	 * @description 父级路由（目录） 配置 用于配置静态、动态路由类型
	 */
	type RouteOption = {
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
			// 页面级别权限设置 ['admin', 'common']
			roles?: string[];
			// 菜单级别权限设置 ['*:*:*']
			permissions?: string[];
			// 排序
			sort?: number;
		};
		children?: RouteChildrenOption[];
	};
}

declare module 'vue-router' {
	interface RouteMeta extends CustomizeRouteMeta {}
}
