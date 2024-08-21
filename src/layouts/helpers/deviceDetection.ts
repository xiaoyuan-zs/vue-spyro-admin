import { useResizeObserver, type MaybeComputedElementRef, breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { useAppStore } from '@/store';
import { unref } from 'vue';
export function isMobile() {
	const appStore = useAppStore();
	const breakpoints = useBreakpoints(breakpointsTailwind);
	const status = unref(breakpoints.smaller('sm'));
	appStore.$patch({ isCollapse: status });
	appStore.$patch({ isMobile: status });
	return status;
}

export function deviceDetection(target: MaybeComputedElementRef | MaybeComputedElementRef[]) {
	isMobile();
	const appStore = useAppStore();
	useResizeObserver(target, (entries) => {
		const { width } = entries[0].contentRect;
		// 兼容移动端
		if (width <= 768 && width > 640) {
			!appStore.isCollapse && appStore.$patch({ isCollapse: true });
		} else if (width <= 640) {
			!appStore.isMobile && appStore.$patch({ isMobile: true });
			!appStore.isCollapse && appStore.$patch({ isCollapse: true });
		} else {
			appStore.isMobile && appStore.$patch({ isMobile: false });
			appStore.isMobile && appStore.$patch({ isCollapse: false });
		}
	});
}
