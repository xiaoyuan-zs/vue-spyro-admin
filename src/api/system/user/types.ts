import { RoleDTO } from '@/api/system/role/types';
import { DeptDTO } from '@/api/system/dept/types';
import { PostDTO } from '@/api/system/post/types';

// 用户信息类型
export type UserDTO = {
	createBy?: string;
	createTime?: string;
	updateBy?: any;
	updateTime?: any;
	deleted?: boolean;
	userId: number;
	deptId: number;
	deptName?: string;
	userName: string;
	password: string;
	nickName: string;
	userType: string;
	email: string;
	phonenumber: string;
	sex: string;
	avatar: string;
	status: string;
	isUpdatePwd: string;
	loginIp?: string;
	loginDate?: string;
	remark?: string;
	dept?: DeptDTO;
	roles?: RoleDTO[];
	roleIds?: any;
	postIds?: any;
	roleId?: any;
	isAdmin: boolean;
};

// 用户角色、岗位组DTO
export type UserInfoDTO = {
	user: UserDTO;
	roles: RoleDTO[];
	posts: PostDTO[];
	roleIds: number[];
	postIds: number[];
};
