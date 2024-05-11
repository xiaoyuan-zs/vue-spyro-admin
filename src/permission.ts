import { RouteLocationNormalized } from 'vue-router';
import router from '@/router';

router.beforeEach(async (to, from, next) => {
	next();
});

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
});
