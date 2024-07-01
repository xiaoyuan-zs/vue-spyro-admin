<script setup lang="ts" name="UseTable">
	import { useTable } from '@/components/SoTable';
	import { getUserList } from '@/api/user';
	import { User } from '@/api/user/types';

	const { state } = useTable({
		fetchApi: getUserList,
		params: {},
		dataCallBack: (data: User) => data
	});
</script>

<template>
	<el-card shadow="hover" class="h-full">
		<div class="h-full flex-col">
			<h2 class="mb-4 underline underline-offset-8 decoration-2 flex items-center">
				<span>useTable示例</span>
			</h2>
		</div>
	</el-card>
</template>
