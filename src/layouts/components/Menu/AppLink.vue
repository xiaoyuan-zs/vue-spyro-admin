<script setup lang="ts" name="AppLink">
	import { isUrl } from '@spyro/utils';
	import { computed } from 'vue';

	const props = defineProps<{
		to: MenuOption;
	}>();

	// 判断 是否是 外链
	const isExternalLink = computed(() => isUrl(props.to.name!));
	const getLinkProps = (item: MenuOption) => {
		// 若为外链 则打开新的窗口
		if (isExternalLink.value) {
			return {
				href: item.name,
				target: '_blank',
				rel: 'noopener'
			};
		}
		return {
			to: item
		};
	};
</script>

<template>
	<component :is="isExternalLink ? 'a' : 'router-link'" v-bind="getLinkProps(to)">
		<slot />
	</component>
</template>
