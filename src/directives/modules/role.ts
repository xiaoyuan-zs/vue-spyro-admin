import { DirectiveBinding } from 'vue';
import { DirectiveOptions } from '../types';

/**
 * 自定义指令-操作权限处理
 */
const hasRole: DirectiveOptions<'vRole'> = {
	name: 'role',
	directive: {
		mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
			// 所有权限
			const adminRoleKey = 'admin';
			const { value } = binding;
		}
	}
};

export default hasRole;
