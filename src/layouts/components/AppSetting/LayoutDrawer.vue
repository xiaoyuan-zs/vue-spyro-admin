<script setup lang="ts" name="LayoutDrawer">
	import { useIcon } from '@/hooks/modules/useIcon';
	import { useTheme, useLayout } from '@/layouts/hooks';
	import { useLayoutStore, useTabsStore } from '@/store';

	const layoutStore = useLayoutStore();
	const tabsStore = useTabsStore();

	const { switchDark, setThemeColor, setMenuTheme, setWeakNessMode, setGrayMode } = useTheme();
	const { settings, layoutModeOptions, animateModeOptions, tabsStyleOptions } = useLayout();

	const Moon = useIcon({ name: 'ep:moon' });
	const Sunny = useIcon({ name: 'ep:sunny' });

	// 预设主题颜色
	const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585']);

	// 切换暗黑模式
	const changeDark = (value: any) => {
		layoutStore.$patch({ isDark: value });
		switchDark();
	};
	// 切换菜单主题
	const changeMenuTheme = (value: any) => {
		layoutStore.$patch({ menuTheme: value });
		setMenuTheme();
	};
	// 切换主题颜色
	const changeThemeColor = (value: any) => {
		setThemeColor(value);
	};
	// 设置布局
	const changeLayoutModel = (value: any) => {
		layoutStore.$patch({ layout: value });
	};
	// 切换布局动画
	const changeAnimateMode = (value: any) => layoutStore.$patch({ animateMode: value });
	// 菜单手风琴模式
	const changeMenuUnique = (value: any) => layoutStore.$patch({ menuUnique: value });
	// 标签是否隐藏
	const changeTabsHidden = (value: any) => layoutStore.$patch({ tabsHidden: value });
	// 标签页风格
	const changeTabStyle = (value: any) => layoutStore.$patch({ tabStyle: value });
	// 标签图标是否隐藏
	const changeTabsIcon = (value: any) => layoutStore.$patch({ tabsIcon: value });
	// 标签是否缓存
	const changeTabsCache = (value: any) => {
		layoutStore.$patch({ tabsCache: value });
		tabsStore.handlePersistTabs();
	};
	// 面包屑
	const changeBreadcrumbs = (value: any) => layoutStore.$patch({ breadcrumbs: value });
	// 面包屑图标是否隐藏
	const changeBreadcrumbsIcon = (value: any) => layoutStore.$patch({ breadcrumbsIcon: value });
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
			<el-select v-model="settings.layout" class="w-full" @change="changeLayoutModel">
				<el-option v-for="item in layoutModeOptions" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<el-divider>{{ $t('setting.themeSetting') }}</el-divider>
		<!-- 主题颜色 -->
		<div class="drawer-item">
			<span>{{ $t('setting.themeColor') }}</span>
			<el-color-picker v-model="settings.themeColor" color-format="hex" :predefine="predefineColors" @change="changeThemeColor" />
		</div>
		<!-- 暗黑主题 -->
		<div class="drawer-item">
			<span>{{ $t('setting.darkTheme') }}</span>
			<el-switch v-model="settings.isDark" inline-prompt :active-action-icon="Moon" :inactive-action-icon="Sunny" @change="changeDark" />
		</div>
		<el-divider>{{ $t('setting.interfaceSetting') }}</el-divider>
		<!-- 深色菜单栏 -->
		<div class="drawer-item">
			<span>{{ $t('setting.menuTheme') }}</span>
			<el-switch v-model="settings.menuTheme" active-value="dark" inactive-value="light" inline-prompt @change="changeMenuTheme" />
		</div>
		<!-- 菜单手风琴模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.menuUnique') }}</span>
			<el-switch v-model="settings.menuUnique" inline-prompt @change="changeMenuUnique" />
		</div>
		<!-- 标签页 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabs') }}</span>
			<el-switch v-model="settings.tabsHidden" inline-prompt @change="changeTabsHidden" />
		</div>
		<!-- 标签页风格 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsStyle') }}</span>
			<el-select v-model="settings.tabStyle" class="w-full" @change="changeTabStyle">
				<el-option v-for="item in tabsStyleOptions" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<!-- 标签页图标 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsIcon') }}</span>
			<el-switch v-model="settings.tabsIcon" inline-prompt @change="changeTabsIcon" />
		</div>
		<!-- 标签页持久化 -->
		<div class="drawer-item">
			<span>{{ $t('setting.tabsCache') }}</span>
			<el-switch v-model="settings.tabsCache" inline-prompt @change="changeTabsCache" />
		</div>
		<!-- 面包屑 -->
		<div class="drawer-item">
			<span>{{ $t('setting.breadCrumb') }}</span>
			<el-switch v-model="settings.breadcrumbs" inline-prompt @change="changeBreadcrumbs" />
		</div>
		<!-- 面包屑图标 -->
		<div class="drawer-item">
			<span>{{ $t('setting.breadCrumbIcon') }}</span>
			<el-switch v-model="settings.breadcrumbsIcon" inline-prompt @change="changeBreadcrumbsIcon" />
		</div>
		<!-- 灰色模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.grayMode') }}</span>
			<el-switch v-model="settings.grayMode" inline-prompt @change="changeGrayMode" />
		</div>
		<!-- 色弱模式 -->
		<div class="drawer-item">
			<span>{{ $t('setting.weaknessMode') }}</span>
			<el-switch v-model="settings.weakness" inline-prompt @change="changeWeakness" />
		</div>
		<!-- 动画类型 -->
		<div class="drawer-item">
			<span>{{ $t('setting.animateMode') }}</span>
			<el-select v-model="settings.animateMode" class="w-full" @change="changeAnimateMode">
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
