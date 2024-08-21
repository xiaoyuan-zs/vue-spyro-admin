import type { App } from 'vue';
// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk
// 如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数
// import.meta.glob('./dir/*.js', { eager: true })
import { ElLoading } from 'element-plus';
import { Icon } from './Icon';

const components = {
	ElLoading,
	Icon
};

export default {
	install(app: App) {
		Object.keys(components).forEach((key) => {
			app.component(key, components[key as keyof typeof components]);
		});
	}
};
