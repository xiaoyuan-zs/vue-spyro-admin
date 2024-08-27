import { isArray } from '@spyro/utils';
import { useUserStore } from '@/store';

export const usePermission = () => {
	const userStore = useUserStore();

	const hasPermissions = (value: Array<string>) => {
		if (isArray(value) && value?.length) {
			// 获取用户权限
			const permissions = userStore.permissions;
			// 管理员拥有所有权限
			const allPermission = '*:*:*';
			// 判断用户是否有传入的权限
			const hasPermission = permissions.some((el) => allPermission === el || value.includes(el));
			return hasPermission;
		} else {
			console.error(
				'hasPermissions: value must be an array and not empty! example: hasPermissions(["system:user:add", "system:user:edit"])'
			);
			return false;
		}
	};

	const hasRoles = (value: Array<string>) => {
		if (isArray(value) && value?.length) {
			// 获取用户角色
			const roles = userStore.roles;
			const allRoles = 'admin';
			// 判断用户是否具有某角色
			const hasRole = roles.some((el) => allRoles === el || value.includes(el));
			return hasRole;
		} else {
			console.error('hasRoles: value must be an array and not empty! example: hasRoles(["admin", "common"])');
			return false;
		}
	};

	return {
		hasPermissions,
		hasRoles
	};
};
