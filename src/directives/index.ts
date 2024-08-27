import type { App } from 'vue';
import type { DirectiveOptions } from './types';

const directModules = import.meta.glob('./modules/*.ts');

export const directives = async (app: App<Element>) => {
	for (const key in directModules) {
		const direct = <importModules<DirectiveOptions<any>>>await directModules[key]();
		app.directive(direct.default.name, direct.default.directive);
	}
};
