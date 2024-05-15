<template>
	<div :class="['flex-center h-18 p-2.5 cursor-pointer']" @click="triggerCollapse">
		<Icon :name="alignArrow" :size="20" />
	</div>
</template>

<script setup lang="ts">
	import { useAppStore } from '@/store';
	const appStore = useAppStore();
	const alignArrow = computed(() => (appStore.isCollapse ? 'ep:expand' : 'ep:fold'));
	const triggerCollapse = () => {
		appStore.$patch({ isCollapse: !appStore.isCollapse });
	};
</script>

<style scoped lang="scss"></style>
