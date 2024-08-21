import { createApp } from 'vue';
// 加载静态资源
import './plugins/assets';
// 插件
import { setupLoading, setupParticles } from '@/plugins';
// router
import { setupRouter } from '@/router';
// pinia
import { setupStore } from '@/store';
// i18n
import { setupI18n } from '@/i18n';

import App from './App.vue';

// 权限认证
import './permission';

const setApp = async () => {
	await setupLoading();
	const app = createApp(App);
	setupParticles(app);
	setupStore(app);
	await setupRouter(app);
	setupI18n(app);
	app.mount('#app');
};

setApp();
