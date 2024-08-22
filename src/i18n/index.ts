import { createI18n } from 'vue-i18n';
import messages from './locales';
import type { App } from 'vue';
import Cookies from 'js-cookie';

const i18n = createI18n({
	globalInjection: true, //全局生效$t
	locale: Cookies.get('language') || 'zh_CN', // 获取缓存语言，没有默认zh-CN
	fallbackLocale: 'zh_CN', // 切换失败回滚语言
	fallbackWarn: false, //  缺失回退内容警告
	messages, // 自定义语言
	legacy: false // 如果要支持compositionAPI，此项必须设置为false;
});

export async function setupI18n(app: App) {
	app.use(i18n);
}

export default i18n;
