interface ImportMetaEnv {
	// Auto generate by env-parse
	/**
	 * 页面标题
	 */
	readonly VITE_APP_TITLE: string;
	/**
	 * 图标集前缀
	 */
	readonly VITE_ICONIFY_PREFIX: string;
	/**
	 * 路由模式
	 */
	readonly VITE_ROUTER_MODE: string;
	/**
	 * 环境路径
	 */
	readonly VITE_APP_CONTEXT_PATH: string;
	/**
	 * 开发环境配置
	 */
	readonly VITE_APP_ENV: string;
	/**
	 * 开发环境端口
	 */
	readonly VITE_APP_PORT: number;
	/**
	 * 开发环境
	 */
	readonly VITE_APP_BASE_API: string;
	/**
	 * 系统设置
	 */
	readonly VITE_APP_SETTING: string;
	/**
	 * 打包压缩方式
	 */
	readonly VITE_BUILD_COMPRESS: ViteCompression;

	/**
	 * 是否使用mock环境
	 */
	readonly VITE_MOCK_SERVER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
