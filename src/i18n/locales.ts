import zhCN from '../../locales/zh_CN.json';
import en from '../../locales/en_US.json';

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
