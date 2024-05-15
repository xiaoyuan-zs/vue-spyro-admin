<script lang="ts" setup>
	const loading = ref(false);
	const frameSrc = ref('');
</script>

<template>
	<div v-loading="loading" class="frame" element-loading-text="加载中...">
		<iframe ref="frameRef" :src="frameSrc" />
	</div>
</template>
