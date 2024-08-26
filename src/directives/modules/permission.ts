import type { DirectiveBinding } from 'vue';
import type { DirectiveOptions } from '../types';

/**
 * 自定义指令-操作权限处理
 */
const hasPerms: DirectiveOptions<'vPermissions'> = {
	name: 'permissions',
	directive: {
		mounted(el: HTMLElement, binding: DirectiveBinding<string[]>) {}
	}
};

export default hasPerms;
