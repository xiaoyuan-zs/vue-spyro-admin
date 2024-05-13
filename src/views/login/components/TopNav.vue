<!-- <template>
	<div class="flex-between w-full px-20 absolute left-0 top-0 right-0 h-20 <sm:px-5">
		<div class="flex-center">
			<Icon name="local-icon-logo" color="var(--el-color-primary)" size="30" />
			<h3 class="ml-2 text-4 text-primary font-bold">{{ appTitle }}</h3>
		</div>
		<div class="flex-center">
			<el-switch v-model="layoutStore.isDark" inline-prompt :active-action-icon="Moon" :inactive-action-icon="Sunny" @change="switchDark" />
			<el-dropdown trigger="click" @command="handleCommand">
				<div class="flex-center w-10 cursor-pointer hover:text-primary transition-base">
					<svg-icon name="language" width="20" height="20" />
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="zh-CN" :disabled="!disabled">简体中文</el-dropdown-item>
						<el-dropdown-item command="en" :disabled="disabled">English</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useLayoutStore } from '@/store';
	import { Moon, Sunny } from '@element-plus/icons-vue';
	import { useTheme } from '@/hooks';
	import { LocaleKey } from '@/locales/locales';
	import { useAppStore } from '@/store';
	import { useI18n } from 'vue-i18n';
	const { locale } = useI18n();
	const appStore = useAppStore();
	const layoutStore = useLayoutStore();
	// 切换语言
	const handleCommand = (val: LocaleKey) => {
		locale.value = val;
		appStore.setLanguage(val);
	};

	const disabled = computed(() => {
		return appStore.language === 'en';
	});

	const appTitle = computed(() => import.meta.env.VITE_APP_TITLE);

	const { switchDark } = useTheme();
</script>

<style scoped lang="scss"></style> -->
