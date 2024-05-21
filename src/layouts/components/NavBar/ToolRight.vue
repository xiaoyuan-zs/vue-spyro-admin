<script setup lang="ts">
	import ClassicUser from './components/ClassicUser.vue';
	import SystemMessage from './components/SystemMessage.vue';
	import Language from './components/Language.vue';
	import Search from './components/Search.vue';
	import FullScreen from './components/FullScreen.vue';
</script>

<template>
	<div class="flex-y-center h-full">
		<!-- 搜索 -->
		<Search />
		<!-- i18图标 -->
		<Language />
		<!-- 布局尺寸图标 -->
		<!-- 全屏 -->
		<FullScreen />
		<!-- 系统消息 -->
		<SystemMessage />
		<!-- 用户信息 -->
		<ClassicUser />
	</div>
</template>
