import js from '@eslint/js';
import { defineFlatConfig } from 'eslint-define-config';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import * as parserVue from 'vue-eslint-parser';
import pluginVue from 'eslint-plugin-vue';
//  将 TypeScript 转换为 ESTree 兼容形式的解析器，以便它可以在 ESLint 中使用
import * as parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';

export default defineFlatConfig([
	// 通用推荐配置
	{
		...js.configs.recommended,

		ignores: ['src/assets/**'],
		languageOptions: {
			// 指定在代码检查期间应添加到全局作用域的其他对象的对象。
			// globals: {}
		},
		plugins: {
			prettier: pluginPrettier
		},
		rules: {
			...configPrettier.rules,
			...pluginPrettier.configs.recommended.rules,
			// 禁止使用 debugger
			'no-debugge': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto'
				}
			]
		}
	},
	// TS/TSX
	{
		files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
		languageOptions: {
			parser: parserTypeScript,
			// 配置解析器选项, 用于将选项直接传递给解析器
			parserOptions: {
				sourceType: 'module'
			}
		},
		plugins: {
			'@typescript-eslint': pluginTypeScript
		},
		// 规则 https://typescript-eslint.nodejs.cn/rules/
		rules: {
			...pluginTypeScript.configs.recommended.rules,
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/no-redeclare': 'error',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/prefer-as-const': 'warn',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' }],
			'@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			]
		}
	},
	// JS
	{
		files: ['**/*.?([cm])js'],
		rules: {
			// 禁止 require() 方式导入
			'@typescript-eslint/no-require-imports': 'off',
			// 禁止使用 var foo = require("foo") 等形式
			'@typescript-eslint/no-var-requires': 'off'
		}
	},
	// Vue
	{
		files: ['**/*.vue'],
		languageOptions: {
			ecmaVersion: 'latest',
			parser: parserVue,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				extraFileExtensions: ['.vue'],
				parser: '@typescript-eslint/parser',
				sourceType: 'module'
			}
		},
		plugins: {
			vue: pluginVue
		},
		processor: pluginVue.processors['.vue'],
		rules: {
			...pluginVue.configs.base.rules,
			...pluginVue.configs['vue3-essential'].rules,
			...pluginVue.configs['vue3-recommended'].rules,
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',
			'vue/require-explicit-emits': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-setup-props-reactivity-loss': 'off',
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'always',
						component: 'always'
					},
					svg: 'always',
					math: 'always'
				}
			]
		}
	}
]);
