import zhCN from './zh-cn';
import en from './en';
// import vxeZhCN from 'vxe-table/lib/locale/lang/zh-CN';
// import vxeEnUS from 'vxe-table/lib/locale/lang/en-US';

const locales = {
	'zh-CN': {
		...zhCN
		// ...vxeZhCN
	},
	en: {
		...en
		// ...vxeEnUS
	}
};

export type LocaleKey = keyof typeof locales;

export default locales;
