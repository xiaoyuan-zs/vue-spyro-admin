/**
 * 功能性工具方法
 */

/**
 * 表格字典值回显
 * @param option 字典option
 * @param field 表格字段值
 * @param value 字典回显值字段
 * @param label 字典回显标签字段
 */
export function selectDictLabel<
	T extends {
		[key: string]: any;
	}
>(option: T[] = [], field: string | number, value: string = 'dictValue', label: string = 'dictLabel') {
	if (!option?.length) return field;
	const data = option.find((item) => {
		if (typeof item[value] === 'string') return item[value] === field + '';
		console.log('field', field, Number(field));

		return item[value] === Number(field);
	});
	if (data) return data[label];
	return field;
}
