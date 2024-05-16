// 平台布局配置
const platformConfig: PlatFormConfig = {
	// 布局切换
	layout: 'vertical',
	// 内容区滚动条加载进度
	isOpenProgress: true,
	// 菜单栏模式(light|dark)
	menuMode: 'light',
	// 暗黑模式
	isDark: false,
	// 主题颜色
	themeColor: '#1e90ff',
	// 标签栏
	tabsHidden: true,
	// 标签风格 圆滑smooth | 卡片card | 灵动nimble
	tabStyle: 'smooth',
	// 标签栏图标
	tabsIcon: true,
	// 标签栏是否缓存
	tabsCache: false,
	// 面包屑
	breadcrumbs: true,
	// 面包屑图标
	breadcrumbsIcon: true,
	// 菜单手风琴模式
	menuUnique: false,
	// 是否灰色模式
	grayMode: false,
	// 色弱
	weakness: false,
	// 动画
	animateMode: 'zoom-fade'
};

const settingConfig = {
	// 系统标题
	title: import.meta.env.VITE_APP_TITLE,
	// 侧边栏展开与搜索临界点
	screenSize: 960,
	// 侧边栏最大宽度
	asideMaxWidth: '210px',
	// 侧边栏最小宽度
	asideMinWidth: '64px'
};

// 标签风格
const tabsStyle = [
	{ label: '卡片', value: 'card' },
	{ label: '灵动', value: 'nimble' },
	{ label: '圆滑', value: 'smooth' }
];

export { platformConfig, tabsStyle, settingConfig };
