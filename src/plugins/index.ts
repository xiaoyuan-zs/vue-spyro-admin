// loading 加载页面
import { setupLoading } from './loading';
// 粒子动画效果
import { setupParticles } from './particles';
// 国际化
import { setupI18n, i18n, $t, type LocaleKey } from './i18n';
// Echarts 图表
import { echarts, type ECOption } from './echarts';
// 进度条
import { Nprogress, start, done } from './nprogress';

// 导出实例
export { setupLoading, setupParticles, setupI18n, i18n, $t, echarts, Nprogress, start, done };
// 导出类型
export type { LocaleKey, ECOption };
