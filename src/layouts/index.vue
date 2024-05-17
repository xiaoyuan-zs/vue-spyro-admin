<script setup lang="ts" name="Layout">
	import LayoutVertical from './LayoutVertical/index.vue';
	const layoutComponent: Record<LayoutConfig, Component> = {
		vertical: LayoutVertical,
		basic: LayoutVertical,
		horizontal: LayoutVertical,
		lattice: LayoutVertical,
		mixins: LayoutVertical
	};

	// const layout = computed(() => );
</script>

<template>
	<component :is="layoutComponent['vertical']" />
</template>

<style scoped lang="scss"></style>
