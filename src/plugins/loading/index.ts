import { localForage } from '@/utils/localforage';
import { platformConfig } from '@/config';
export function setupLoading() {
	// 获取主题颜色
	const themeColor = localForage().getItem('layout_theme') ?? platformConfig.themeColor;
}
