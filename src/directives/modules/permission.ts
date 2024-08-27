import type { DirectiveBinding } from 'vue';
import type { DirectiveOptions } from '../types';
import { useUserStore } from '@/store';

/**
 * 自定义指令-操作权限处理
 */
const hasPerms: DirectiveOptions<'vPermissions'> = {
	name: 'permissions',
	directive: {
		mounted(el: HTMLElement, binding: DirectiveBinding<string[]>) {
			const userStore = useUserStore();
			const { value } = binding;
			// 获取用户权限
			const permissions = userStore.permissions;
			// 管理员拥有所有权限
			const allPermission = '*:*:*';
			if (value.length === 0) {
				console.error(
					'v-permissions: value must be an array and not empty! example: hasPermissions(["system:user:add", "system:user:edit"])'
				);
				return;
			}
			// 判断用户是否有传入的权限
			const hasPermission = permissions.some((el) => allPermission === el || value.includes(el));
			if (!hasPermission) {
				el.parentNode && el.parentNode.removeChild(el);
			}
		}
	}
};

export default hasPerms;
