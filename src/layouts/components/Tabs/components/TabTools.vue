<script setup lang="ts">
	import { useTabsStore, useAppStore } from '@/store';
	import { ContextMenuType } from '@/store/types';

	interface PropsType {
		options: ContextMenuType[];
		currTabMenu: string;
	}

	const props = defineProps<PropsType>();
	const emit = defineEmits(['updateStatus']);
	const tabStore = useTabsStore();
	const appStore = useAppStore();

	const handleRefresh = () => {
		appStore.reloadPageActions();
	};
	const handleCommand = (prop: string) => {
		prop === 'refresh' ? handleRefresh() : (tabStore as any)[prop](props.currTabMenu);
	};
	// 打开下拉时，过滤当前菜单状态
	const updateStatus = () => {
		emit('updateStatus');
	};
</script>

<template>
	<el-dropdown @command="handleCommand" @visible-change="updateStatus">
		<div class="p-2 hover:bg-[var(--el-fill-color)] transition rounded-lg flex-center cursor-pointer">
			<Icon name="ep:setting" :size="20" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in options" :key="item.prop" :disabled="item.disabled" :command="item.prop">
					<Icon :name="item.icon" />
					{{ item.label }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
