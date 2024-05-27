import { useLayoutStore } from '@/store';
const layoutStore = useLayoutStore();

const {
	layout,
	isOpenProgress,
	menuTheme,
	isDark,
	themeColor,
	tabsHidden,
	tabStyle,
	tabsIcon,
	tabsCache,
	breadcrumbs,
	breadcrumbsIcon,
	menuUnique,
	grayMode,
	weakness,
	animateMode
} = layoutStore;

export const useLayout = () => {
	const settings = reactive({
		// 布局切换
		layout,
		// 内容区滚动条加载进度
		isOpenProgress,
		// 菜单栏模式(light|dark)
		menuTheme,
		// 暗黑模式
		isDark,
		// 主题颜色
		themeColor,
		// 标签栏
		tabsHidden,
		// 标签风格 圆滑smooth | 卡片card | 灵动nimble
		tabStyle,
		// 标签栏图标
		tabsIcon,
		// 标签栏是否缓存
		tabsCache,
		// 面包屑
		breadcrumbs,
		// 面包屑图标
		breadcrumbsIcon,
		// 菜单手风琴模式
		menuUnique,
		// 是否灰色模式
		grayMode,
		// 色弱
		weakness,
		// 动画
		animateMode
	});

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

	return {
		settings,
		layoutModeOptions,
		animateModeOptions,
		tabsStyleOptions
	};
};
