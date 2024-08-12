import Particles from 'particles.vue3';
import type { App } from 'vue';

export function setupParticles(app: App) {
	app.use(Particles);
}
