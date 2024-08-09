import type { StorageLike, PersistedStateOptions } from 'pinia-plugin-persistedstate';
// 持久化加密
// import SecureLS from 'secure-ls';

// 持久化参数类型
interface PersistConfig extends PersistedStateOptions {
	key?: string;
	paths?: string[];
	storage?: StorageLike;
	secureLs?: boolean;
}

// const secureLS = new SecureLS({
// 	isCompression: false, // 是否数据压缩
// 	encodingType: 'AES', // 加密类型
// 	encryptionSecret: '!@#xiaoyuanzs' // 自定义加密encryptionSecret
// });

// const secureStorage: StorageLike = {
// 	setItem(key, value) {
// 		secureLS.set(key, value);
// 	},
// 	getItem(key) {
// 		return secureLS.get(key);
// 	}
// };

// persist接收 boolean | PersistedStateOptions | PersistedStateOptions[]
//     key, // 自定义键名，默认是 store.$id
//     storage: secureLs ? secureStorage : storage, // 存储地方， 默认存储在sessionStorage
//     paths // paths --- state中的字段
//     serializer 可以自定义序列化工具 如 pnpm install zipson -S      import { parse, stringify } from 'zipson'
export const piniaPersist = (persistOptions: PersistConfig | PersistConfig[]): PersistedStateOptions | PersistedStateOptions[] => {
	// if (!persistOptions) return {};
	// if (Array.isArray(persistOptions)) {
	// 	persistOptions.map((el) => {
	// 		if (!el.secureLs) {
	// 			el.secureLs = true;
	// 			el.storage = secureStorage;
	// 		}
	// 	});
	// } else {
	// 	const { secureLs } = persistOptions;
	// 	if (!secureLs) persistOptions.storage = secureStorage;
	// }
	return persistOptions;
};
