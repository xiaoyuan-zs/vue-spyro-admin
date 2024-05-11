import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
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
					importStyle: 'sass',
				}),
			],
		}),
		// 自动导入组件
		Components({
			dts: 'src/auto-components.d.ts',
			resolvers: [
				// 导入 scss
				ElementPlusResolver({
					importStyle: 'sass',
				}),
			],
		}),
	];
}
