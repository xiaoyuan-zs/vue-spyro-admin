export default {
	tabWidth: 2,
	// 缩进
	useTabs: true, // 缩进方式
	// 语句结尾是否加分号
	semi: true,
	// 单引号
	singleQuote: true,
	// 换行长度
	printWidth: 140,
	// 箭头函数参数
	arrowParens: 'always',
	// 对象花括号内是否加空格
	bracketSpacing: true,
	// 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
	endOfLine: 'auto',
	// 多行时,最后一行是否需要尾随逗号 可选值"<none|es5|all>"
	trailingComma: 'none',
	// 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
	bracketSameLine: true,
	// 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
	jsxSingleQuote: false,
	// 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值(尖括号会换行)， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的(尖括号不会换行)
	htmlWhitespaceSensitivity: 'ignore',
	/**
        "always" - 如果散文超出打印宽度，则将其换行。
        "never" - 将每一段散文拆成一行。
        "preserve" - 什么都不做，让散文保持原样。 在 v1.9.0 中首次可用
     */
	proseWrap: 'never',
	// vue文件内script和style标签缩进
	vueIndentScriptAndStyle: true
};
