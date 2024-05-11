import { createApp } from 'vue';

import App from './App.vue';
// router
import router from '@/router';
// pinia
import pinia from '@/store';

// unoCss.css
import 'virtual:uno.css';
// import scss
import '~/assets/styles/index.scss';
// element css
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
// animate.css  animate版本是4.x，使用时要注意对应的所有类名都以animate__开头，并且还要配合animate__animated一起使用！
// import 'animate.css';

const app = createApp(App);

// 权限认证
import './permission';

const setApp = async () => {
	app.use(pinia);
	app.use(router);
	await router.isReady();
	app.mount('#app');
};

setApp();
