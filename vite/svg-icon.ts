import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default function createSvgIcon(command: boolean) {
	return createSvgIconsPlugin({
		// 指定要缓存的图标文件夹
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		// 指定symbolId格式
		symbolId: 'icon-[dir]-[name]',
		// svg压缩
		svgoOptions: command,
	});
}
