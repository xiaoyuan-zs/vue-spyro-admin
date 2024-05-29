<script setup lang="ts" name="LayoutDrawer">
	import { useIcon } from '@/hooks/modules/useIcon';
	import { useTheme, useLayout } from '@/layouts/hooks';
	import { useLayoutStore, useTabsStore } from '@/store';

	const layoutStore = useLayoutStore();
	const tabsStore = useTabsStore();

	const { switchDark, setThemeColor, setDarkMenu, setWeakNessMode, setGrayMode } = useTheme();
	const { predefineThemeColors, layoutModeOptions, animateModeOptions, tabsStyleOptions } = useLayout();

	const Moon = useIcon({ name: 'ep:moon' });
	const Sunny = useIcon({ name: 'ep:sunny' });

	// 切换系统主题颜色
	const changeThemeColor = (value: any) => setThemeColor(value);
	// 标签是否缓存
	const changeTabsCache = () => tabsStore.handlePersistTabs();
	// 灰色模式
	const changeGrayMode = () => setGrayMode();
	// 色弱模式
	const changeWeakness = () => setWeakNessMode();
</script>

<template>
	<el-scrollbar>
		<el-divider>{{ $t('setting.layoutSetting') }}</el-divider>
		<div class="drawer-item">
			<span>{{ $t('setting.layout') }}</span>
			<el-select v-model="layoutStore.layout" class="w-full">
				<el-option v-for="item in layoutModeOptions" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<el-divider>{{ $t('setting.themeSetting') }}</el-divider>
		<!-- 系统主题 -->
		<div class="drawer-item">
			<span>{{ $t('setting.themeColor') }}</span>
			<el-color-picker v-model="layoutStore.themeColor" color-format="hex" :predefine="predefineThemeColors" @change="changeThemeColor" />
		</div>
		<!-- 深色主题 -->
		<div class="drawer-item">
			<span>{{ $t('setting.darkTheme') }}</span>
			<el-switch v-model="layoutStore.isDark" inline-prompt :active-action-icon="Moon" :inactive-action-icon="Sunny" @change="switchDark" />
		</div>
		<!-- 深色侧边栏 -->
		<div class="drawer-item">
			<span>{{ $t('setting.darkMenu') }}</span>
			<el-switch v-model="layoutStore.darkMenu" inline-prompt @change="setDarkMenu" />
		</div>
		<!-- 灰色模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.grayMode') }}</span>
			<el-switch v-model="layoutStore.grayMode" inline-prompt @change="changeGrayMode" />
		</div>
		<!-- 色弱模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.weaknessMode') }}</span>
			<el-switch v-model="layoutStore.weakness" inline-prompt @change="changeWeakness" />
		</div>
		<el-divider>{{ $t('setting.interfaceSetting') }}</el-divider>
		<!-- 菜单手风琴模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.menuUnique') }}</span>
			<el-switch v-model="layoutStore.menuUnique" inline-prompt />
		</div>
		<!-- 标签页 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabs') }}</span>
			<el-switch v-model="layoutStore.tabsHidden" inline-prompt />
		</div>
		<!-- 标签页风格 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsStyle') }}</span>
			<el-select v-model="layoutStore.tabStyle" class="w-full">
				<el-option v-for="item in tabsStyleOptions" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<!-- 标签页图标 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsIcon') }}</span>
			<el-switch v-model="layoutStore.tabsIcon" inline-prompt />
		</div>
		<!-- 标签页持久化 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsCache') }}</span>
			<el-switch v-model="layoutStore.tabsCache" inline-prompt @change="changeTabsCache" />
		</div>
		<!-- 面包屑 -->
		<div class="drawer-item">
			<span>{{ $t('setting.breadCrumb') }}</span>
			<el-switch v-model="layoutStore.breadcrumbs" inline-prompt />
		</div>
		<!-- 面包屑图标 -->
		<div class="drawer-item">
			<span>{{ $t('setting.breadCrumbIcon') }}</span>
			<el-switch v-model="layoutStore.breadcrumbsIcon" inline-prompt />
		</div>
		<!-- 动画类型 -->
		<div class="drawer-item">
			<span>{{ $t('setting.animateMode') }}</span>
			<el-select v-model="layoutStore.animateMode" class="w-full">
				<el-option v-for="item in animateModeOptions" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<el-divider>{{ $t('setting.tips') }}</el-divider>
		<el-alert :title="$t('setting.tipDesc')" type="warning" :closable="false" />
	</el-scrollbar>
</template>

<style scoped lang="scss">
	.drawer-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0;
		padding-right: 10px;
		text-align: center;

		& > span {
			padding-right: 10px;
			white-space: nowrap;
			opacity: 0.7;
		}
	}
</style>
