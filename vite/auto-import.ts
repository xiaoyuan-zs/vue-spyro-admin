import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default function createAutoImport() {
	return [
		// 自动导入
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			dts: 'src/auto-import.d.ts',
			resolvers: [
				// 导入 scss
				ElementPlusResolver({
					importStyle: 'sass'
				})
			]
		}),
		// 自动导入组件
		Components({
			include: [/\.vue$/], // 指定加载文件
			dts: 'src/auto-components.d.ts',
			resolvers: [
				// 导入 scss
				ElementPlusResolver({
					importStyle: 'sass'
				}),
				/**
				 * 自动引入图标组件解析器(解决手动引入)
				 * prefix - 前缀，默认为 i，上面我们配置成了 icon，即组件名以 icon 开头
				 * collection - 图标集名
				 * icon - 图标名
				 * {prefix}-{collection}-{icon}
				 */
				IconsResolver({
					prefix: 'icon'
				})
			]
		}),
		// Iconify图标按需导入(需自己手动引入)
		Icons({
			compiler: 'vue3', // 指定编译器
			autoInstall: true // 自动安装图标
		})
	];
}
