// loading 加载页面
import { setupLoading } from './loading';
// 进度条
import { start, done } from './nprogress';
// 国际化
import { setupI18n, i18n, $t, type LocaleKey } from './i18n';
// 自定义指令
import { setupDirectives } from './directives';
// Echarts 图表
import { echarts, type ECOption } from './echarts';
// 粒子动画效果
import { setupParticles } from './particles';

// 导出实例
export { setupLoading, setupParticles, setupI18n, setupDirectives, i18n, $t, echarts, start, done };
// 导出类型
export type { LocaleKey, ECOption };
