import { defineConfig, type ConfigEnv, type UserConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { createVitePlugins } from './build/plugins';
import { include, exclude } from './build/optimize';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
	// process.cwd() 方法返回的是当前Nodejs进程的工作目录  F:\study\vue\github\spyro
	const root = process.cwd();

	// Vite 默认是不加载 .env 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个
	// 根据当前工作目录中的 `mode` 加载 .env 文件
	// loadEnv的第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
	const env = loadEnv(mode, root);
	const { VITE_APP_BASE_API, VITE_APP_CONTEXT_PATH, VITE_APP_PORT } = env as ImportMetaEnv;

	return {
		root,
		// 部署生产环境和开发环境下的URL。
		// 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上, 就需要用这个选项指定这个子路径。
		// 如果你的应用被部署在 https://www.xxx.com/admin/，则设置 base 为 /admin/。
		base: VITE_APP_CONTEXT_PATH,
		resolve: {
			alias: {
				// 设置路径  __dirname返回的是当前脚本所在的目录的绝对路径。
				// './' 返回的是当前路径下所有的文件路径  则 ./src ==> F:\study\vue\github\spyro\src
				'~': fileURLToPath(new URL('./src', import.meta.url)),
				'@': fileURLToPath(new URL('src', import.meta.url))
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "~/assets/styles/element/element-plus.scss" as *;
						@use "~/assets/styles/themify.scss" as *;
                    `
				}
			}
		},
		// command === 'serve' 表示serve独有配置     command === 'build' 表示 build 独有配置
		plugins: createVitePlugins(env, command),
		// 服务代理
		server: {
			port: VITE_APP_PORT,
			host: '0.0.0.0',
			open: false,
			proxy: {
				[VITE_APP_BASE_API]: {
					target: 'http://localhost:8080',
					changeOrigin: true,
					rewrite: (api) => api.replace(new RegExp('^' + VITE_APP_BASE_API), '')
				}
			},
			// 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
			warmup: {
				clientFiles: ['./index.html', './src/{views,components}/*']
			}
		},
		// vite预构建
		optimizeDeps: {
			include,
			exclude
		},
		// 预览 配置默认值为 server 配置的默认值
		preview: {
			port: 8888
		},
		build: {
			minify: true,
			chunkSizeWarningLimit: 1000,
			//小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
			assetsInlineLimit: 4096,
			sourcemap: false,
			rollupOptions: {
				// 将js，css这些资源目录分别打包到对应的文件夹下
				output: {
					entryFileNames: 'assets/js/[name]-[hash].js', // 包的入口文件名称
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
					// js分包优化
					// https://rollup.nodejs.cn/configuration-options/#output-manualchunks
					manualChunks(id) {
						const otherChunks = [
							'dayjs',
							'xe-utils',
							'lodash-es',
							'vue-json-pretty',
							'@element-plus',
							'vue',
							'vue-router',
							'pinia',
							'echarts'
						];
						if (otherChunks.find((chunk) => id.includes(`node_modules/${chunk}/`))) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString();
						}
					},
					chunkFileNames: (chunkInfo) => {
						const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
						const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
						return `assets/js/${fileName}/[name].[hash].js`;
					}
				}
			}
		}
	};
});
