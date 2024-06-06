<script lang="ts" setup>
	import { LocaleKey } from '@/locales/locales';
	import { useAppStore } from '@/store';
	import { ElMessage } from 'element-plus';
	// 引入i18n
	import { useI18n } from 'vue-i18n';
	const { locale, t } = useI18n();
	const appStore = useAppStore();
	// 切换语言
	const handleCommand = (val: LocaleKey) => {
		locale.value = val;
		appStore.setLanguage(val);
		ElMessage.success(t('common.switchLanguage'));
	};

	const disabled = computed(() => {
		return appStore.language === 'en';
	});
</script>

<template>
	<el-tooltip effect="dark" content="语言切换" placement="left">
		<el-dropdown trigger="click" @command="handleCommand">
			<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer">
				<Icon name="sw:language" :size="20" />
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="zh-CN" :disabled="!disabled">简体中文</el-dropdown-item>
					<el-dropdown-item command="en" :disabled="disabled">English</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</el-tooltip>
</template>

<style lang="scss" scoped></style>
