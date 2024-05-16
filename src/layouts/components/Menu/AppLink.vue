<script setup lang="ts" name="AppLink">
	import { isExternal } from '@/utils/validate';
	import { computed } from 'vue';

	const props = defineProps<{
		to: MenuOption;
	}>();

	const isExternalLink = computed(() => isExternal(props.to.name!));
	const getLinkProps = (item: MenuOption) => {
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
