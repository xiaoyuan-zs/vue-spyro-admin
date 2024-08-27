import { defineStore } from 'pinia';
import { piniaPersist } from '@/store/helpers/piniaPersist';
import { platformConfig } from '@/config';
import { localForage } from '@spyro/utils';
export const useLayoutStore = defineStore('layout', {
	state: (): PlatFormConfig => ({
		...platformConfig
	}),
	actions: {
		// 提供Loading使用
		setPlatFormThemeActions() {
			localForage().setItem('layout_theme', this.themeColor);
		}
	},
	persist: piniaPersist({ key: 'layout' })
});
