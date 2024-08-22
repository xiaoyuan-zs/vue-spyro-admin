import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import Cookies from 'js-cookie';
import zhCN from '../../../locales/zh_CN.json';
import enUS from '../../../locales/en_US.json';

const messages = {
	'zh-CN': {
		...zhCN
	},
	en: {
		...enUS
	}
};

export const i18n = createI18n({
	globalInjection: true, //全局生效$t
	locale: Cookies.get('language') || 'zh-CN', // 获取缓存语言，没有默认zh-CN
	fallbackLocale: 'zh-CN', // 切换失败回滚语言
	fallbackWarn: false, //  缺失回退内容警告
	messages, // 自定义语言内容体
	legacy: false // 如果要支持compositionAPI，此项必须设置为false;
});

export type LocaleKey = keyof typeof messages;

// 用于 i18n 插件智能化显示译文
export const $t = (key: string) => key;

export async function setupI18n(app: App) {
	app.use(i18n);
}
