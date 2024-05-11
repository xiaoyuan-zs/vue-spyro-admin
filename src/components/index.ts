import type { App } from 'vue';
// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk
// 如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数
// import.meta.glob('./dir/*.js', { eager: true })
// const modules = import.meta.glob('./**/*.vue');

import { Icon } from './Icon';

export default {
	install(app: App) {
		// 注册全局组件
		// 由于有自动导入组件插件，这里不需要在全局导入，因此修改为按需引入形式
		// Object.keys(modules).forEach((key: string) => {
		//     let name = key.replaceAll(/\.\/|\/index.vue/g, '');
		//     app.component(name, modules[key]);
		// });

		// 注册Svg图标组件
		app.component('Icon', Icon);
	}
};
