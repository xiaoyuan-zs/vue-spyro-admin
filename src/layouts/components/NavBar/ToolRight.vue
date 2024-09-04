<script setup lang="ts">
	import ClassicUser from './components/ClassicUser.vue';
	import SystemMessage from './components/SystemMessage.vue';
	import Language from './components/Language.vue';
	// import Search from './components/Search.vue';
	import FullScreen from './components/FullScreen.vue';
	import SystemConfig from './components/SystemConfig.vue';

	// 生产模式不需要可自行修改
	const isShow = import.meta.env.VITE_APP_SETTING === 'Y';
</script>

<template>
	<div class="flex-y-center h-full">
		<!-- 搜索 -->
		<!-- <Search /> -->
		<!-- i18图标 -->
		<Language />
		<!-- 全屏 -->
		<FullScreen />
		<!-- 系统消息 -->
		<SystemMessage />
		<!-- 系统配置 -->
		<SystemConfig v-if="isShow" />
		<!-- 用户信息 -->
		<ClassicUser />
	</div>
</template>
