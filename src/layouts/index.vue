<script setup lang="ts" name="Layout">
	import LayoutVertical from './LayoutVertical/index.vue';
	const layoutComponent: Record<LayoutConfig, Component> = {
		vertical: LayoutVertical,
		basic: LayoutVertical,
		horizontal: LayoutVertical,
		lattice: LayoutVertical,
		gradient: LayoutVertical
	};

	// const layout = computed(() => );
</script>

<template>
	<Transition enter-active-class="animate__animated animate__fadeIn" mode="out-in">
		<component :is="layoutComponent['vertical']" />
	</Transition>
</template>

<style scoped lang="scss"></style>
