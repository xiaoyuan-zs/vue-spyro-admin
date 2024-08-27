<script setup lang="ts" name="LayoutDrawer">
	import LayoutSelect from './LayoutSelect.vue';
	import { useTheme, useLayout } from '@/layouts/hooks';
	import { useLayoutStore, useTabsStore } from '@/store';
	import { unref } from 'vue';

	const layoutStore = useLayoutStore();
	const tabsStore = useTabsStore();

	const { switchDark, setThemeColor, setDarkMenu, setWeakNessMode, setGrayMode } = useTheme();
	const { predefineThemeColors, animateModeOptions, tabsStyleOptions, colorModeOptions } = useLayout();

	const menuVisible = computed(() => !['horizontal', 'basic', 'mixins'].includes(layoutStore.layout!));

	// 切换系统主题颜色
	const changeThemeColor = (value: any) => {
		setThemeColor(value);
		layoutStore.setPlatFormThemeActions();
	};
	// 切换主题模式
	const changeColorModel = (value: any) => {
		layoutStore.$patch({ colorMode: value });
		switchDark();
	};
	// 标签是否缓存
	const changeTabsCache = () => tabsStore.handlePersistTabs();
	// 灰色模式
	const changeGrayMode = () => setGrayMode();
	// 色弱模式
	const changeWeakness = () => setWeakNessMode();

	// 清除缓存
	const clearCache = () => {
		localStorage.clear();
		window.location.reload();
	};
</script>

<template>
	<el-scrollbar>
		<div class="p-5">
			<el-divider>{{ $t('platform.layout') }}</el-divider>
			<!-- 布局模式 -->
			<div class="drawer-item">
				<LayoutSelect />
			</div>
			<el-divider>{{ $t('platform.theme') }}</el-divider>
			<!-- 主题模式 -->
			<div class="drawer-item">
				<div class="flex-center w-full">
					<div class="flex bg-[var(--el-fill-color)] px-1 py-1 b-rd-2">
						<div
							v-for="item in colorModeOptions"
							:key="item.value"
							:class="[
								'px-4.5 py-2 b-rd-2 flex-center cursor-pointer transition duration-200',
								{ 'bg-[var(--el-color-info-light-7)]': item.value === layoutStore.colorMode }
							]"
							@click="changeColorModel(item.value)">
							<Icon :name="item.icon" :size="20" />
						</div>
					</div>
				</div>
			</div>
			<!-- 系统主题 -->
			<div class="drawer-item">
				<span>{{ $t('platform.themeMode') }}</span>
				<el-color-picker v-model="layoutStore.themeColor" color-format="hex" :predefine="predefineThemeColors" @change="changeThemeColor" />
			</div>
			<!-- 深色侧边栏 -->
			<Transition name="fade-slide" mode="out-in">
				<div v-show="unref(menuVisible)" class="drawer-item">
					<span>{{ $t('platform.darkMenu') }}</span>
					<el-switch v-model="layoutStore.darkMenu" inline-prompt @change="setDarkMenu" />
				</div>
			</Transition>
			<!-- 灰色模式 -->
			<div class="drawer-item">
				<span>{{ $t('platform.grayMode') }}</span>
				<el-switch v-model="layoutStore.grayMode" inline-prompt @change="changeGrayMode" />
			</div>
			<!-- 色弱模式 -->
			<div class="drawer-item">
				<span>{{ $t('platform.weaknessMode') }}</span>
				<el-switch v-model="layoutStore.weakness" inline-prompt @change="changeWeakness" />
			</div>
			<el-divider>{{ $t('platform.interface') }}</el-divider>
			<!-- 菜单手风琴模式 -->
			<div class="drawer-item">
				<span>{{ $t('platform.menuUnique') }}</span>
				<el-switch v-model="layoutStore.menuUnique" inline-prompt />
			</div>
			<!-- 标签页 -->
			<div class="drawer-item">
				<span>{{ $t('platform.tab') }}</span>
				<el-switch v-model="layoutStore.tabsHidden" inline-prompt />
			</div>
			<!-- 标签页风格 -->
			<div class="drawer-item">
				<span>{{ $t('platform.tabStyle') }}</span>
				<el-select v-model="layoutStore.tabStyle" class="w-full">
					<el-option v-for="item in tabsStyleOptions" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</div>
			<!-- 标签页图标 -->
			<div class="drawer-item">
				<span>{{ $t('platform.tabIcon') }}</span>
				<el-switch v-model="layoutStore.tabsIcon" inline-prompt />
			</div>
			<!-- 标签页持久化 -->
			<div class="drawer-item">
				<span>{{ $t('platform.tabCache') }}</span>
				<el-switch v-model="layoutStore.tabsCache" inline-prompt @change="changeTabsCache" />
			</div>
			<!-- 面包屑 -->
			<div class="drawer-item">
				<span>{{ $t('platform.breadCrumb') }}</span>
				<el-switch v-model="layoutStore.breadcrumbs" inline-prompt />
			</div>
			<!-- 面包屑图标 -->
			<div class="drawer-item">
				<span>{{ $t('platform.breadCrumbIcon') }}</span>
				<el-switch v-model="layoutStore.breadcrumbsIcon" inline-prompt />
			</div>
			<!-- 动画类型 -->
			<div class="drawer-item">
				<span>{{ $t('platform.animateType') }}</span>
				<el-select v-model="layoutStore.animateMode" class="w-full">
					<el-option v-for="item in animateModeOptions" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</div>
			<el-divider>{{ $t('platform.tip') }}</el-divider>
			<el-alert :title="$t('platform.tipDesc')" type="warning" :closable="false" />
			<!-- 清除缓存 -->
			<div class="mt-2 p-2 cursor-pointer bg-[var(--el-color-error-light-9)] b-rounded flex-center" @click="clearCache">
				<Icon name="ep:delete" :size="16" color="var(--el-color-error)" />
				<span class="text-error text-3 p-l-2">{{ $t('platform.clearCache') }}</span>
			</div>
		</div>
	</el-scrollbar>
</template>

<style scoped lang="scss">
	.drawer-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0;
		text-align: center;

		& > span {
			padding-right: 10px;
			white-space: nowrap;
			opacity: 0.7;
		}
	}
</style>
