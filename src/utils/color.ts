import { ElMessage } from 'element-plus';

/**
 * light模式颜色, 默认rgb颜色
 * @param color 颜色值
 * @param level 层级 255, 20.5
 * @returns
 */
export const getThemeLightOrDarkRgbColor = (color: string, level: number, colour: number = 255) => {
	if (checkIsColor('rgb', color)) {
		ElMessage.warning('请输入正确的rgb颜色值! 例如: RGB(255,255,255)');
		return;
	}
	let rgbArr: number[] = [];
	// 获取 rgb 中 十进制数
	rgbArr = color
		.replaceAll(/rgb\(|\)/g, '')
		.split(',')
		.map((el) => {
			return Math.round(colour * level + Number(el.trim()) * (1 - level));
		});
	return rgbToHex(`rgb(${rgbArr.join(',')})`);
};

/**
 * light模式颜色, 默认Hex颜色
 * @param color 颜色值
 * @param level 层级 255, 20.5
 * @returns
 */
export const getThemeLightOrDarkHexColor = (color: string, level: number, colour: number = 255) => {
	if (checkIsColor('hex', color)) {
		ElMessage.warning('请输入正确的hex颜色值! 例如: #ffffff');
		return;
	}
	let rgbArr: number[] = [];
	// 获取 rgb 中 十进制数
	rgbArr = (hexToRgb(color) as string)
		.replaceAll(/rgb\(|\)/g, '')
		.split(',')
		.map((el) => {
			return Math.round(colour * level + Number(el.trim()) * (1 - level));
		});
	return rgbToHex(`rgb(${rgbArr.join(',')})`);
};

/**
 * hex颜色值转为 rgb 颜色值
 * @param color 颜色值
 */
export const hexToRgb = (color: string) => {
	// 判断是否符合颜色值
	if (checkIsColor('hex', color)) {
		ElMessage.warning('请输入正确的hex颜色值!');
		return;
	}
	let hexs: number[] = [];
	// 去除颜色值的 # ，在把这个值 按照 十六进制按照两位分割成一个数组, 并把每一个 16 进制值 转为 10 进制数
	hexs = (color.replace('#', '').match(/../g) as string[]).map((item) => parseInt(item, 16));
	return `rgb(${hexs.join(',')})`;
};

/**
 * rgb 颜色值转为 hex 颜色值
 * @param color 颜色值
 */
export const rgbToHex = (color: string) => {
	if (checkIsColor('rgb', color)) {
		ElMessage.warning('请输入正确的rgb颜色值!');
		return;
	}
	let newRgbArr: string[] = [];
	// 获取 rgb 中 十进制数
	color
		.replaceAll(/rgb\(|\)/g, '')
		.split(',')
		.map((el) => newRgbArr.push(Number(el.trim()).toString(16)));
	return `#${newRgbArr.join('')}`;
};

/**
 * 校验颜色
 * @param color 颜色值
 * @returns
 */
function checkIsColor(type: string, color: string): boolean {
	let reg = '';
	if (/^[rR][gG][Bb]/.test(type)) {
		//如果是rgb开头，200-249，250-255，0-199
		reg = '^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$';
	} else if (/^[rR][gG][Bb][Aa]/.test(type)) {
		//如果是rgba开头，判断0-255:200-249，250-255，0-199 判断0-1：0 1 1.0 0.0-0.9
		reg = '^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$';
	} else if (/^[Hh][Ee][Xx]/.test(type)) {
		//六位或者三位
		reg = '^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$';
	} else if (/^[Hh][Ss][Ll]/.test(type)) {
		//判断0-360 判断0-100%(0可以没有百分号)
		reg =
			'^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$';
	} else if (/^[hH][Ss][Ll][Aa]/.test(type)) {
		reg =
			'^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$';
	}
	let regExp = new RegExp(reg);
	return color.match(regExp) == null;
}
