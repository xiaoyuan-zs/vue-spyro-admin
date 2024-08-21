import zhCN from '../../locales/zh-cn.json';
import en from '../../locales/en.json';

const locales = {
	'zh-CN': {
		...zhCN
	},
	en: {
		...en
	}
};

export type LocaleKey = keyof typeof locales;

export default locales;
