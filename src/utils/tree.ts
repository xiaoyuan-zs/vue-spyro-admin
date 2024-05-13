/**
 * @description 无层级关系树构建成有层级关系树 （增加id 和 parentId）
 * @param tree 树
 * @param pathList 每一项的id组成的数组
 * @returns 创建层级关系后的树
 */
export const buildHierarchyTree = (tree: any[], pathList = []): any => {
	if (!Array.isArray(tree)) {
		console.warn('tree must be an array');
		return [];
	}
	if (!tree || tree.length === 0) return [];
	for (const [key, node] of tree.entries()) {
		node.id = key;
		node.parentId = pathList.length ? pathList[pathList.length - 1] : null;
		node.pathList = [...pathList, node.id];
		const hasChildren = node.children && node.children.length > 0;
		if (hasChildren) {
			buildHierarchyTree(node.children, node.pathList);
		}
	}
	return tree;
};

/**
 * @description 树结构转为一维数组 (扁平化)
 * @param array 树
 * @returns
 */
export const flatTreeToArray = <T extends { children?: T[] }>(tree: T[]): T[] => {
	if (!Array.isArray(tree)) {
		console.warn('tree must be an array');
		return [];
	}
	return tree.reduce((arr: T[], { children, ...item }) => {
		return arr.concat(item as T, children && children.length ? flatTreeToArray(children) : []);
	}, []);
};
