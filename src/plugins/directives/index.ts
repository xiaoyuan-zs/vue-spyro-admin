import type { App } from 'vue';
import { directives } from '@/directives';

export async function setupDirectives(app: App) {
	await directives(app);
}
