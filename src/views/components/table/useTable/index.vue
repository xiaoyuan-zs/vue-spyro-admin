<script setup lang="ts" name="UseTable">
	import { useTable } from '@/components/SoTable';
	import { getUserList } from '@/api/user';

	const { state } = useTable({
		fetchApi: async () => {
			const { data, total = 0 } = await getUserList();
			return {
				data,
				total
			};
		}
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
