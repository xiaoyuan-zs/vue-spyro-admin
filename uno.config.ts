import { defineConfig } from '@unocss/vite';
import { presetSpyroAdmin } from '@spyro/uno-preset';
import presetUno from '@unocss/preset-uno';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
	content: {
		pipeline: {
			exclude: ['node_modules', 'dist']
		}
	},
	// css预设
	presets: [presetUno({ dark: 'class' }), presetSpyroAdmin(), presetRemToPx(), presetIcons()],
	// unoCss 转换器
	transformers: [transformerDirectives(), transformerVariantGroup()],
	// 自定义预设快捷方式
	shortcuts: {
		'wh-full': 'w-full h-full'
	},
	// 主题颜色
	theme: {
		colors: {
			primary: 'var(--el-color-primary)',
			primary_dark: 'var(--el-color-primary-light-5)',
			info: 'var(--el-color-info)',
			success: 'var(--el-color-success)',
			warning: 'var(--el-color-warning)',
			error: 'var(--el-color-error)',
			fill: 'var(--el-fill-color-light)',
			text: 'var(--el-text-color-primary)',
			card: 'var(--el-bg-color-overlay)',
			background: 'var(--el-bg-color)',
			border_color: 'var(--el-border-color-lighter)',
			loading: 'var(--primary-color)'
		}
	}
});
