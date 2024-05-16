<script lang="ts" setup>
	import { useFullscreen } from '@vueuse/core';

	const { isFullscreen, enter, exit } = useFullscreen();
	const icon = computed(() => (isFullscreen.value ? 'vx:fullscreen-exit' : 'vx:fullscreen'));
	// 是否全屏
	const handleFull = () => (isFullscreen.value ? exit() : enter());
</script>

<template>
	<div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill" @click="handleFull">
		<Icon :name="icon" :size="20" />
	</div>
</template>
