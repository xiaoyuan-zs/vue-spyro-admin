<script lang="ts" setup>
	import LayoutDrawer from './LayoutDrawer.vue';
	const settingVisible = ref<boolean>(false);
	// 生产模式不需要可自行修改
	const isShow = import.meta.env.DEV && import.meta.env.VITE_APP_SETTING === 'Y';

	const clearCache = () => {
		localStorage.clear();
		window.location.reload();
	};
</script>

<template>
	<div v-if="isShow" class="fixed z-99 flex-center w-fit h-fit top-40% right-0 rounded-l-md cursor-pointer">
		<el-card shadow="never" :body-style="{ padding: '8px' }">
			<div class="p-2 bg-[var(--el-color-primary-light-9)] b-rounded flex-col-center" @click="settingVisible = !settingVisible">
				<Icon name="ep:setting" :size="16" color="var(--el-color-primary)" />
				<span class="text-primary text-3">系统设置</span>
			</div>
			<div class="mt-2 p-2 bg-[var(--el-color-error-light-9)] b-rounded flex-col-center" @click="clearCache">
				<Icon name="ep:setting" :size="16" color="var(--el-color-error)" />
				<span class="text-error text-3">清除缓存</span>
			</div>
		</el-card>
	</div>
	<el-drawer class="drawer" append-to-body v-model="settingVisible" :title="$t('setting.settings')" size="320px" direction="rtl">
		<layout-drawer />
	</el-drawer>
</template>

<style lang="scss" scoped></style>
