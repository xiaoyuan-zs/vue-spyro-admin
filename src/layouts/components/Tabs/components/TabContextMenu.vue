<script setup lang="ts">
	import { StyleValue } from 'vue';
	import { useTabsStore, useAppStore } from '@/store';
	import { ContextMenuType } from '@/store/types';

	interface PropsType {
		options: ContextMenuType[];
		showContextMenu: boolean;
		currTabMenu: string;
		menuStyle: StyleValue;
	}
	const props = defineProps<PropsType>();
	const tabStore = useTabsStore();
	const appStore = useAppStore();

	const handleRefresh = () => {
		appStore.reloadPageActions();
	};
	// 点击对应菜单调用对应方法
	const handleClickItem = (key: string) => {
		key === 'refresh' ? handleRefresh() : (tabStore as any)[key](props.currTabMenu);
	};
</script>

<template>
	<Teleport to="body">
		<transition name="el-zoom-in-top">
			<div v-show="showContextMenu" class="context-menu shadow-md" :style="menuStyle">
				<ul v-for="item in options" :key="item.prop" class="flex-center">
					<li v-if="item.show" class="flex-center" @click="handleClickItem(item.prop)">
						<Icon :name="item.icon" :size="14" />
						<span class="ml-1 text-xs">{{ item.label }}</span>
					</li>
				</ul>
			</div>
		</transition>
	</Teleport>
</template>

<style scoped lang="scss">
	.context-menu {
		position: fixed;
		z-index: 2000;
		padding: 5px 0;
		background-color: var(--el-bg-color);
		border-radius: 3px;
		transition: all 0.3s;

		& > ul li {
			padding: 5px 15px;
			color: var(--el-text-color-regular);

			&:hover {
				color: var(--el-color-primary);
				cursor: pointer;
				background-color: var(--el-color-primary-light-9);
			}
		}
	}
</style>
