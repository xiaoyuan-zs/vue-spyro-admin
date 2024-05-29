<script setup lang="ts">
	import { useAppStore } from '@/store';
	const appStore = useAppStore();
	const alignArrow = computed(() => (appStore.isCollapse ? 'vx:align-right' : 'vx:align-left'));
	const triggerCollapse = () => {
		appStore.$patch({ isCollapse: !appStore.isCollapse });
	};
</script>

<template>
	<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer" @click="triggerCollapse">
		<Icon :name="alignArrow" :size="20" />
	</div>
</template>
