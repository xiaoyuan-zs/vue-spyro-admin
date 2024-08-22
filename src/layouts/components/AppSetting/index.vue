<script lang="ts" setup>
	import LayoutDrawer from './LayoutDrawer.vue';
	import { emitter } from '@/utils/mittBus';

	const settingVisible = ref(false);

	onMounted(() => {
		emitter.on('OpenSystemConfig', () => {
			settingVisible.value = true;
		});
	});

	onBeforeUnmount(() => {
		emitter.off('OpenSystemConfig');
	});
</script>

<template>
	<el-drawer v-model="settingVisible" class="drawer" append-to-body :title="$t('platform.systemSetting')" size="320px" direction="rtl">
		<layout-drawer />
	</el-drawer>
</template>
