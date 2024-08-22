<script lang="ts" setup>
	import { useFullscreen } from '@vueuse/core';

	const { isFullscreen, enter, exit } = useFullscreen();
	const icon = computed(() => (isFullscreen.value ? 'spyro:fullscreen-exit' : 'spyro:fullscreen'));
	// 是否全屏
	const handleFull = () => (isFullscreen.value ? exit() : enter());
</script>

<template>
	<el-tooltip effect="dark" :content="$t('platform.toggleFullScreen')" placement="bottom">
		<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer" @click="handleFull">
			<Icon :name="icon" :size="20" />
		</div>
	</el-tooltip>
</template>
