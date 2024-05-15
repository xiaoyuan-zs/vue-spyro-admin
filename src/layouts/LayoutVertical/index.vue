<script setup lang="ts" name="LayoutVertical">
	import ToolLeft from '../components/NavBar/ToolLeft.vue';
	import ToolRight from '../components/NavBar/ToolRight.vue';
	import { useAppStore, useLayoutStore } from '@/store';
	import { deviceDetection } from '../helpers/deviceDetection';
	import { settingConfig } from '@/config';
	import { useRouter } from 'vue-router';

	const appTitle = import.meta.env.VITE_APP_TITLE;

	const appStore = useAppStore();
	const containerRef = ref<HTMLElement>();

	const router = useRouter();
	const routeBack = () => {
		router.push({ name: 'Home' });
	};

	// 搜索宽度
	const { asideMaxWidth, asideMinWidth } = settingConfig;
	const { isMobile, isCollapse } = storeToRefs(appStore);
	const collapseWidth = computed(() =>
		isMobile.value ? (isCollapse.value ? '0' : asideMaxWidth) : appStore.isCollapse ? asideMinWidth : asideMaxWidth
	);
	// mask蒙层
	const showAppMask = computed(() => appStore.isMobile && !appStore.isCollapse);
	const closeAppMask = () => appStore.$patch({ isCollapse: true });
	// 视口适配移动端
	deviceDetection(containerRef);
</script>
<template>
	<el-container class="h-full" ref="containerRef">
		<!-- <AppMask v-show="showAppMask" @click.prevent="closeAppMask" /> -->
		<el-aside :class="['aside', appStore.isMobile && 'p-0 fixed top-0 bottom-0 left-0 z-9999']" :width="collapseWidth">
			<div class="flex-center shrink-0 h-14 w-full nowrap-hidden cursor-pointer" @click="routeBack">
				<Icon name="vx:logo" :size="30" color="var(--el-color-primary)" />
				<h3 class="ml-2 text-4 text-primary truncate font-bold">
					{{ appTitle }}
				</h3>
			</div>
		</el-aside>
		<el-container direction="vertical" class="relative">
			<el-header class="header">
				<tool-left />
				<tool-right />
			</el-header>
			<!-- <Tabs /> -->
			<MainApp />
		</el-container>
	</el-container>
</template>
<style scoped lang="scss">
	.aside {
		@apply py-2 flex-col-stretch bg-background border-r-1 border-solid border-[var(--el-color-info-light-8)] transition-width duration-300;
	}
</style>
