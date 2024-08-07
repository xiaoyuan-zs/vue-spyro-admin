// 安装pinia持久化插件， 并导入
import type { Pinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import type { App } from 'vue';

const pinia: Pinia = createPinia();
pinia.use(
	createPersistedState({
		key: (id) => `__persisted__${id}`,
		storage: localStorage
	})
);

export async function setupStore(app: App) {
	app.use(pinia);
}
export * from './modules';
export default pinia;
