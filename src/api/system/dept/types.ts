// 部门类型
export type DeptDTO = {
	createBy?: any;
	createTime?: any;
	updateBy?: any;
	updateTime?: any;
	deleted?: any;
	parentName?: any;
	parentId?: number;
	children?: DeptDTO[];
	deptId: number;
	deptName: string;
	orderNum?: number;
	leader?: string;
	phone?: any;
	email?: any;
	status?: string;
	ancestors?: string;
};

// 部门树类型
export type DeptTreeType = {
	id: number;
	label: string;
	parentId: number;
	weight: number;
	children: DeptTreeType[];
};
