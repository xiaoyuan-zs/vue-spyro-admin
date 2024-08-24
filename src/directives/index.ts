import type { App } from 'vue';
import type { DirectiveOptions } from './types';

const directModules = import.meta.glob('./modules/*.ts');

const directives = {
	install: async function (app: App<Element>) {
		for (const key in directModules) {
			const direct = <importModules<DirectiveOptions<any>>>await directModules[key]();
			app.directive(direct.default.name, direct.default.directive);
		}
	}
};
export default directives;
