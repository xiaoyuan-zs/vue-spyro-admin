import { RouteLocationNormalized } from 'vue-router';
import router from '@/router';
import { isUrl } from '@/utils/validate';

router.beforeEach(async (to, from, next) => {
	next();
});

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {});
