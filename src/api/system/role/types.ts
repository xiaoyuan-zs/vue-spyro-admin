// 角色类型
export type RoleDTO = {
	createBy?: any;
	createTime?: any;
	updateBy?: any;
	updateTime?: any;
	deleted?: any;
	roleId: number;
	roleName: string;
	roleKey: string;
	roleSort: number;
	dataScope?: string;
	menuCheckStrictly?: any;
	deptCheckStrictly?: any;
	status?: string;
	remark?: any;
	flag?: boolean;
	menuIds?: any;
	deptIds?: any;
	admin?: boolean;
};

// 用户和角色关联
export type UserRoleDTO = {
	roleId: number;
	userId: number;
};
