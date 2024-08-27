<script lang="ts" setup>
	import { useAppStore } from '@/store';
	const appStore = useAppStore();

	let loading = ref<boolean>();
	let timer = ref();

	const handleRefresh = () => {
		clearTimeout(timer.value);
		loading.value = true;
		appStore.reloadPageActions();
		timer.value = setTimeout(() => {
			loading.value = false;
		}, 1000);
	};
</script>

<template>
	<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer" @click="handleRefresh">
		<Icon name="spyro:refresh" :size="20" />
	</div>
</template>
