import type { PluginOption } from 'vite';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import unoCss from '@unocss/vite';
import createCompression from './compression';
import createAutoImport from './auto-import';
import viteBuildInfo from './info';
// import vueDevTools from 'vite-plugin-vue-devtools';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import removeNoMatch from 'vite-plugin-router-warn';
import removeConsole from 'vite-plugin-remove-console';
import { vitePluginFakeServer } from 'vite-plugin-fake-server';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Vite注册所需插件
 */
export function createVitePlugins(env: Record<string, string>, command: boolean): PluginOption[] {
	const { VITE_BUILD_COMPRESS, VITE_MOCK_SERVER } = env as ImportMetaEnv;
	const vitePlugins: PluginOption[] = [
		vue(),
		// vue 开发工具
		// vueDevTools(),
		// 自动导入
		...createAutoImport(env),
		// UnoCss 原子化
		unoCss(),
		// 在Vue中支持JSX语法
		vueJsx(),
		// 让setup语法糖支持 name 属性
		vueSetupExtend(),
		createSvgIconsPlugin({
			// 指定要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
			// svg压缩
			svgoOptions: command
		}),
		vitePluginFakeServer({
			// 是否在控制台输出日志
			logger: false,
			// 响应超时
			// timeout: 200,
			// 设置mock文件夹名称
			include: 'mock',
			// 请求前缀
			basename: 'mock',
			enableDev: VITE_MOCK_SERVER === 'true',
			enableProd: VITE_MOCK_SERVER === 'true'
		}),
		/**
		 * 开发环境下移除非必要的vue-router动态路由警告No match found for location with path
		 * 非必要具体看 https://github.com/vuejs/router/issues/521 和 https://github.com/vuejs/router/issues/359
		 * vite-plugin-router-warn只在开发环境下启用，只处理vue-router文件并且只在服务启动或重启时运行一次，性能消耗可忽略不计
		 */
		removeNoMatch(),
		// 构建信息
		viteBuildInfo(),
		// 文件压缩
		createCompression(VITE_BUILD_COMPRESS, command),
		// 线上环境删除console
		removeConsole(),
		// 打包分析插件
		visualizer({
			open: true,
			brotliSize: true,
			filename: 'visualizer.html' //分析图生成的文件名
		})
	];
	return vitePlugins;
}
