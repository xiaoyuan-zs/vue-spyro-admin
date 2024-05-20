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
		appStore.reloadPage();
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
	<div class="w-40px h-full flex-center cursor-pointer">
		<el-dropdown class="h-full" @command="handleCommand" @visible-change="updateStatus">
			<div class="flex-center h-full w-10 cursor-pointer hover:bg-fill">
				<Icon name="vx:down-menu" :size="20" />
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
	</div>
</template>
