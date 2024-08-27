import { createApp } from 'vue';
// 加载静态资源
import './plugins/assets';
// 插件
import { setupLoading, setupDirectives, setupParticles, setupI18n } from '@/plugins';
// router
import { setupRouter } from '@/router';
// pinia
import { setupStore } from '@/store';

import App from './App.vue';

// 权限认证
import './permission';

const setApp = async () => {
	await setupLoading();
	const app = createApp(App);
	setupStore(app);
	await setupRouter(app);
	await setupDirectives(app);
	setupParticles(app);
	setupI18n(app);
	app.mount('#app');
};

setApp();
