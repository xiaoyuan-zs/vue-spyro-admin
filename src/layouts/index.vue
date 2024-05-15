<script setup lang="ts" name="Layout">
	const layoutComponent: Record<LayoutConfig, Component> = {
		vertical: () => import('./LayoutVertical/index.vue'),
		basic: () => import('./LayoutVertical/index.vue'),
		horizontal: () => import('./LayoutVertical/index.vue'),
		lattice: () => import('./LayoutVertical/index.vue'),
		gradient: () => import('./LayoutVertical/index.vue')
	};

	// const layout = computed(() => );
</script>

<template>
	<Transition enter-active-class="animate__animated animate__fadeIn" mode="out-in">
		<component :is="layoutComponent['vertical']" />
	</Transition>
</template>

<style scoped lang="scss"></style>
