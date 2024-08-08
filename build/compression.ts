import type { Plugin } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default function createCompression(compress: ViteCompression, command: boolean): Plugin | Plugin[] {
	if (!command || compress === 'none') return [];
	const gz = {
		// 生成的压缩包后缀
		ext: '.gz',
		// 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
		threshold: 10240,
		// 是否在控制台中输出压缩结果
		verbose: true,
		// 默认压缩.js|mjs|json|css|html后缀文件，设置成true，压缩全部文件
		filter: () => true,
		// 压缩后是否删除原始文件
		deleteOriginFile: false
	};
	const br = {
		ext: '.br',
		verbose: true,
		// 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
		algorithm: 'brotliCompress',
		threshold: 10240,
		filter: () => true,
		deleteOriginFile: false
	};

	const codeList = [
		{ k: 'gzip', v: [gz] },
		{ k: 'brotli', v: [br] },
		{ k: 'both', v: [gz, br] }
	];

	const plugins: Plugin[] = [];

	codeList.forEach((item) => {
		// 是否包含以下压缩方式
		if (compress.includes(item.k)) {
			// 是否包含 clear 清除源文件
			if (compress.includes('clear')) {
				item.v.forEach((el) => {
					plugins.push(viteCompression(Object.assign(el, { deleteOriginFile: true })));
				});
			} else {
				item.v.forEach((el) => {
					plugins.push(viteCompression(el));
				});
			}
		}
	});

	return plugins;
}
