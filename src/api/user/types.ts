export interface User {
	userId: string;
	username: string;
	nickname: string;
	password: string;
	sex: 'female' | 'male';
	status: boolean;
	avatar: string;
	phone: string;
	email: string;
	createTime: Date;
	roles: string[];
	permissions: string[];
	createBy: string;
	remark: string;
}
