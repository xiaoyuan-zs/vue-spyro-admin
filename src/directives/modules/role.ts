import type { DirectiveBinding } from 'vue';
import type { DirectiveOptions } from '../types';

/**
 * 自定义指令-操作权限处理
 */
const hasRole: DirectiveOptions<'vRoles'> = {
	name: 'roles',
	directive: {
		mounted(el: HTMLElement, binding: DirectiveBinding<string[]>) {
			console.log(21, binding);
		}
	}
};

export default hasRole;
