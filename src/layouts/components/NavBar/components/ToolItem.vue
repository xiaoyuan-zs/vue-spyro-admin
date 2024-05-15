<template>
	<div class="flex-y-center h-full">
		<!-- 搜索 -->
		<Search />
		<!-- 系统消息 -->
		<SystemMessage />
		<!-- i18图标 -->
		<Language />
		<!-- 布局尺寸图标 -->
		<!-- 刷新 -->
		<Refresh />
		<!-- 全屏 -->
		<FullScreen />
		<!-- 用户信息 -->
		<ClassicUser />
	</div>
</template>

<script setup lang="ts">
	import Refresh from './Refresh.vue';
	import ClassicUser from './ClassicUser.vue';
	import SystemMessage from './SystemMessage.vue';
	import Language from './Language.vue';
	import Search from './Search.vue';
	import FullScreen from './FullScreen.vue';
</script>

<style scoped lang="scss"></style>
