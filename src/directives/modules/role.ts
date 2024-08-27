import type { DirectiveBinding } from 'vue';
import type { DirectiveOptions } from '../types';
import { useUserStore } from '@/store';

/**
 * 自定义指令-操作权限处理
 */
const hasRole: DirectiveOptions<'vRoles'> = {
	name: 'roles',
	directive: {
		mounted(el: HTMLElement, binding: DirectiveBinding<string[]>) {
			const userStore = useUserStore();
			const { value } = binding;
			// 获取用户角色
			const roles = userStore.roles;
			const allRoles = 'admin';
			if (value.length === 0) {
				console.error('v-roles: value must be an array and not empty! example: hasRoles(["admin", "common"])');
				return;
			}
			// 判断用户是否具有某角色
			const hasRole = roles.some((el) => allRoles === el || value.includes(el));
			if (!hasRole) {
				el.parentNode && el.parentNode.removeChild(el);
			}
		}
	}
};

export default hasRole;
