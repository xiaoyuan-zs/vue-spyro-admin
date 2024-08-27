<script setup lang="ts">
	import { useUserStore } from '@/store';
	defineOptions({
		name: ''
	});

	const userStore = useUserStore();
	const currRole = computed(() => userStore.roles.toString());
</script>

<template>
	<SoCard title="权限示例" class="h-full">
		<div>
			<div>
				<h1 class="text-6">当前角色: {{ currRole }}</h1>
				<el-button-group class="m-4">
					<el-button>admin</el-button>
					<el-button>common</el-button>
				</el-button-group>
			</div>
			<div>
				<h1 class="text-6">指令v-permissions 和 v-roles</h1>
				<el-button-group class="m-4">
					<el-button v-permissions="['admin']">仅admin可见</el-button>
					<el-button>common</el-button>
				</el-button-group>
			</div>
		</div>
	</SoCard>
</template>
