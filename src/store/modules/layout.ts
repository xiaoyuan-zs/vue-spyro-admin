import { defineStore } from 'pinia';
import { piniaPersist } from '@/store/helpers/piniaPersist';
import { platformConfig } from '@/config';
export const useLayoutStore = defineStore('layout', {
	state: (): PlatFormConfig => ({
		...platformConfig
	}),
	actions: {},
	persist: piniaPersist({ key: 'layout' })
});
