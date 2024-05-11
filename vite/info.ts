import type { Plugin } from 'vite';
import gradientString from 'gradient-string';
import boxen, { type Options as BoxenOptions } from 'boxen';
import dayjs, { Dayjs } from 'dayjs';
// Duration 增加了 .duration .isDuring API 来支持时间长度。
// @see https://day.js.org/docs/zh-CN/plugin/duration
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// 使用gradient-string自定义颜色文本
const useMessage = gradientString('cyan', 'pink').multiline(
	'欢迎使用 gradient-string 控制台颜色渐变搭配 boxen 实现输出\n具体用法: https://reports.org.cn/plugin-using/gradient-string/summary#accepted-string-input'
);

// 使用boxen增加文字边框等
const boxenOptions: BoxenOptions = {
	padding: 0.5,
	borderColor: 'blue',
	borderStyle: 'round'
};

/**
 * 自定义构建信息输出插件
 * @returns
 */
export default function viteBuildInfo(): Plugin {
	let config: { command: string };
	let outDir: string;
	let startTime: Dayjs;
	let endTime: Dayjs;
	return {
		name: 'vite:build',
		configResolved(resolvedConfig) {
			config = resolvedConfig;
			outDir = resolvedConfig.build?.outDir ?? 'dist';
		},
		buildStart() {
			// 构建开始
			console.log(boxen(useMessage, boxenOptions));
			if (config.command === 'build') {
				startTime = dayjs(new Date());
			}
		},
		buildEnd() {
			// 构建结束
			if (config.command === 'build') {
				endTime = dayjs(new Date());
				console.log(
					boxen(
						gradientString('pink', 'cyan').multiline(`🎉 打包完成（总用时${dayjs.duration(endTime.diff(startTime)).format('mm分ss秒')}）`),
						boxenOptions
					)
				);
			}
		}
	};
}
