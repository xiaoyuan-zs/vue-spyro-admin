import zhCN from '../../locales/zh-CN.json';
import en from '../../locales/en-US.json';

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
