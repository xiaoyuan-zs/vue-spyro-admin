import { i18n } from '@/plugins/i18n';

/**
 * 获取国际化路由，如果不存在则原生返回
 * @param title 路由名称
 * @returns
 */
export const translateRouteTitle = (title: string): string => {
	const hasKey = i18n.global.te(title);
	if (hasKey) {
		const translatedTitle = i18n.global.t(title);
		return translatedTitle;
	}
	return title;
};
