declare global {
	/**
	 * 打包压缩格式的类型声明
	 */
	type ViteCompression = 'none' | 'gzip' | 'brotli' | 'both' | 'gzip-clear' | 'brotli-clear' | 'both-clear';

	/**
	 * 布局类型声明
	 */
	type LayoutConfig = 'basic' | 'vertical' | 'lattice' | 'horizontal' | 'mixins';

	// 全局导入模块类型
	type importModules<T> = {
		default: T;
	};

	/**
	 * 全局配置类型
	 */
	interface PlatFormConfig {
		layout?: LayoutConfig;
		darkMenu?: boolean;
		isOpenProgress?: boolean;
		colorMode?: 'auto' | 'dark' | 'light';
		themeColor?: string;
		tabsHidden?: boolean;
		tabStyle?: string;
		tabsIcon?: boolean;
		tabsCache?: boolean;
		breadcrumbs?: boolean;
		breadcrumbsIcon?: boolean;
		menuUnique?: boolean;
		grayMode?: boolean;
		weakness?: boolean;
		animateMode?: string;
	}
}

export {};
