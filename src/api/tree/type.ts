export type TreeNode = {
	uuid: string;
	label: string;
	sex: string;
	status: boolean;
	avatar: string;
	phone: string;
	email: string;
	children: TreeNode[];
};
