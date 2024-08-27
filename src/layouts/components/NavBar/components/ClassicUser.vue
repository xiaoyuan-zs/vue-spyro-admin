<script setup lang="ts">
	import avatar from '@/assets/images/avatar.jpg';
	import { useUserStore } from '@/store';

	const userStore = useUserStore();

	const nickname = computed(() => userStore.nickname);

	const handleCommand = (command: string) => {
		switch (command) {
			case 'logout':
				logout();
				break;
			case 'userCenter':
				break;
		}
	};

	const logout = async () => {
		await useUserStore().logoutAction();
	};
</script>

<template>
	<el-dropdown trigger="click" @command="handleCommand">
		<span class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer">
			<el-avatar :src="avatar" class="shrink-0 !w-5 !h-5" />
			<span class="ml-2">{{ nickname }}</span>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item command="userCenter">{{ $t('platform.personalCenter') }}</el-dropdown-item>
				<el-dropdown-item command="logout" divided>{{ $t('platform.logout') }}</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
