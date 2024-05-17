import Vue, { VNode } from 'vue';

declare module '*.tsx' {
	import Vue from 'compatible-vue';
	export default Vue;
}

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
