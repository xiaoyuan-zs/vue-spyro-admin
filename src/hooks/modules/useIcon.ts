import { Icon, IconTypes } from '@/components/Icon';
import { VNode } from 'vue';

export const useIcon = (props: IconTypes): VNode => {
	return h(Icon, props);
};
