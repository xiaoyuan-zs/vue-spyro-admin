import type { VNode } from 'vue';
import type Vue from 'vue';

declare module '*.tsx' {
	import Vue from 'compatible-vue';
	export default Vue;
}

// 声明JSX类型 （切勿在tsconfig.ts 中配置 jsxImportSource:"Vue", 否则会导致下面类型声明失效）
declare global {
	namespace JSX {
		interface Element extends VNode {}
		interface ElementClass extends Vue {}
		interface ElementAttributesProperty {
			$props: any;
		}
		interface IntrinsicElements {
			[key: string]: any;
		}
		interface IntrinsicAttributes {
			[key: string]: any;
		}

		interface AllowedComponentProps {
			[key: string]: any;
		}
	}
}
