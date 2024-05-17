export {};
declare global {
	/**
	 * 打包压缩格式的类型声明
	 */
	type ViteCompression = 'none' | 'gzip' | 'brotli' | 'both' | 'gzip-clear' | 'brotli-clear' | 'both-clear';

	/**
	 * 布局类型声明
	 */
	type LayoutConfig = 'basic' | 'vertical' | 'lattice' | 'horizontal' | 'mixins';

	/**
	 * 全局配置类型
	 */
	interface PlatFormConfig {
		layout?: LayoutConfig;
		menuMode?: string;
		isOpenProgress?: boolean;
		isDark?: boolean;
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

	// 全局导入模块类型
	type importModules<T> = {
		default: T;
	};

	/**
	 * 平台里所有组件实例都能访问到的全局属性对象的类型声明
	 */
	interface GlobalPropertiesApi {
		$echarts: ECharts;
		$storage: ResponsiveStorage;
		$config: PlatformConfigs;
	}
}
