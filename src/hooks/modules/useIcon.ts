import { Icon, type IconTypes } from '@/components/Icon';
import type { VNode } from 'vue';

export const useIcon = (props: IconTypes): VNode => {
	return h(Icon, props);
};
