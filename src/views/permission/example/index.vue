<script setup lang="ts">
	import { useUserStore } from '@/store';
	import { useRouter } from 'vue-router';

	defineOptions({
		name: ''
	});

	const userStore = useUserStore();
	const currRole = computed(() => userStore.roles.toString());

	const router = useRouter();

	const handleClick = () => router.push({ name: 'PermVisible' });

	const handleChangeRole = (value: string) => {};
</script>

<template>
	<SoCard title="权限示例" class="h-full">
		<div>
			<div>
				<h1 class="text-6">当前角色: {{ currRole }}</h1>
				<el-button-group class="m-4">
					<el-button @click="handleChangeRole('admin')">admin</el-button>
					<el-button @click="handleChangeRole('common')">common</el-button>
					<el-button @click="handleChangeRole('normal')">normal</el-button>
				</el-button-group>
			</div>
			<div>
				<h1 class="text-6">指令v-permissions 和 v-roles</h1>
				<el-button-group class="m-4">
					<el-button v-roles="['admin']">仅admin可见</el-button>
					<el-button v-roles="['common']">common</el-button>
					<el-button v-permissions="['system:permissions:view']" @click="handleClick">
						具有 ['system:permissions:view'] 权限可访问
					</el-button>
				</el-button-group>
			</div>
			<div>
				<h1 class="text-6">函数usePermission</h1>
				<!-- <el-button-group class="m-4">
					<el-button v-roles="['admin']">仅admin可见</el-button>
					<el-button v-roles="['common']">common</el-button>
					<el-button v-permissions="['system:permissions:view']" @click="handleClick">
						具有 ['system:permissions:view'] 权限可访问
					</el-button>
				</el-button-group> -->
			</div>
		</div>
	</SoCard>
</template>
