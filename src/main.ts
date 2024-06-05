import { createApp } from 'vue';

import App from './App.vue';
// router
import router from '@/router';
// pinia
import pinia from '@/store';
// i18n
import i18n from '@/locales';

// unoCss.css
import 'virtual:uno.css';
// import scss
import '~/assets/styles/index.scss';
// element css
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
// svg icons
import 'virtual:svg-icons-register';
// animate.css  animate版本是4.x，使用时要注意对应的所有类名都以animate__开头，并且还要配合animate__animated一起使用！
import 'animate.css';

const app = createApp(App);

import { useVxeTable } from '@/plugins/vxe-table';
useVxeTable(app);

// 权限认证
import './permission';

const setApp = async () => {
	app.use(pinia);
	app.use(i18n);
	app.use(router);
	await router.isReady();
	app.mount('#app');
};

setApp();
