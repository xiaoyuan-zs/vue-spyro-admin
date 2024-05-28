<script setup lang="ts">
	import { useAppStore } from '@/store';
	const appStore = useAppStore();
	const alignArrow = computed(() => (appStore.isCollapse ? 'vx:align-right' : 'vx:align-left'));
	const triggerCollapse = () => {
		appStore.$patch({ isCollapse: !appStore.isCollapse });
	};
</script>

<template>
	<div :class="['flex-center h-full p-4 cursor-pointer']" @click="triggerCollapse">
		<Icon :name="alignArrow" :size="20" />
	</div>
</template>
