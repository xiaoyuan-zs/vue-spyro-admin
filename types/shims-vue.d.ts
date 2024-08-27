import type { Directives } from '@/directives/types';

// 必须添加export {}, 否则它将覆盖原始类型，而不是扩展!
export {};

declare module 'vue' {
	interface ComponentCustomProperties extends Directives {}
}

// 声明一个模块，用于匹配所有以 ".vue" 结尾的文件
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	// 定义一个类型为 DefineComponent 的变量 component
	// 它具有三个泛型参数，分别表示组件的 props、组件的 data 和其他的类型。
	// 在这里，我们使用空对象（{}）表示没有 props，使用空对象（{}）表示没有 data，使用 any 表示其他类型可以是任意值。
	const component: DefineComponent<{}, {}, any>;
	// 导出 component 变量，这样其他地方在导入 ".vue" 文件时，TypeScript 编译器会将它识别为一个 Vue 组件
	export default component;
}

declare module 'colorthief';
declare module 'particles.vue3';
