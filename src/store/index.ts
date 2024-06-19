// 安装pinia持久化插件， 并导入
import type { Pinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia: Pinia = createPinia();
pinia.use(
	createPersistedState({
		key: (id) => `__persisted__${id}`,
		storage: localStorage
	})
);

export * from './modules';
export default pinia;
