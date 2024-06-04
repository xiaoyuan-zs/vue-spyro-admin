export const useLayout = () => {
	// 预设系统主题颜色
	const predefineThemeColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585']);

	// 布局模式
	const layoutModeOptions = [
		{ label: '纵向', value: 'vertical' },
		{ label: '经典', value: 'basic' },
		{ label: '横向', value: 'horizontal' },
		{ label: '栅格', value: 'lattice' },
		{ label: '混合', value: 'mixins' }
	];
	// 动画类型
	const animateModeOptions = [
		{ label: '默认', value: 'zoom-fade' },
		{ label: '滑动', value: 'fade-slide' },
		{ label: '渐变', value: 'fade' },
		{ label: '底部滑出', value: 'fade-bottom' },
		{ label: '缩放消退', value: 'fade-scale' }
	];
	// 标签风格
	const tabsStyleOptions = [
		{ label: '卡片', value: 'card' },
		{ label: '灵动', value: 'nimble' },
		{ label: '圆滑', value: 'smooth' }
	];

	// 主题模式
	const colorModeOptions = [
		{ icon: 'line-md:computer', value: 'auto' },
		{ icon: 'line-md:moon-alt-to-sunny-outline-loop-transition', value: 'light' },
		{ icon: 'line-md:moon-alt-loop', value: 'dark' }
	];

	return {
		predefineThemeColors,
		layoutModeOptions,
		animateModeOptions,
		tabsStyleOptions,
		colorModeOptions
	};
};
