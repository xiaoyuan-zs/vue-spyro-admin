<script lang="ts" setup>
	import { emitter } from '@/utils/mittBus';
	const openConfig = () => emitter.emit('OpenSystemConfig');
</script>

<template>
	<el-tooltip effect="dark" content="主题" placement="bottom">
		<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer" @click="openConfig">
			<Icon name="line-md:heart" :size="20" />
		</div>
	</el-tooltip>
</template>
