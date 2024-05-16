<script lang="ts" setup>
	import { useAppStore } from '@/store';
	const appStore = useAppStore();

	let loading = ref<boolean>();
	let timer = ref();

	const handleRefresh = () => {
		clearTimeout(timer.value);
		loading.value = true;
		appStore.reloadPage();
		timer.value = setTimeout(() => {
			loading.value = false;
		}, 1000);
	};
</script>

<template>
	<div class="flex-center h-14 w-10 cursor-pointer hover:bg-fill" @click="handleRefresh">
		<Icon name="vx:refresh" :size="20" />
	</div>
</template>
