import zhCN from '../../../locales/zh_CN.json';
import enUS from '../../../locales/en_US.json';

const message = {
	'zh-CN': {
		...zhCN
	},
	en: {
		...enUS
	}
};

export type LocaleKey = keyof typeof message;

export default message;
