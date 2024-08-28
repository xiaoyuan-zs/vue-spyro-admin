<script setup lang="ts">
	import { useUserStore } from '@/store';
	import { useRouter } from 'vue-router';
	import { usePermission } from '@/hooks';

	defineOptions({
		name: 'Example'
	});

	const router = useRouter();
	const userStore = useUserStore();
	const { hasPermissions, hasRoles } = usePermission();

	const currRole = computed(() => userStore.roles.toString());
	const isAdmin = computed(() => hasRoles(['admin']));
	const isCommon = computed(() => hasRoles(['common']));
	const isCommonAndNormal = computed(() => hasRoles(['normal', 'common']));
	const isViewPerm = computed(() => hasPermissions(['common:permissions:view']));

	const permissionObj: Record<string, string> = {
		admin: '*:*:*',
		common: 'common:permissions:view',
		normal: 'normal:permissions:view'
	};

	const handleClick = () => router.push({ name: 'PermVisible' });
	const handleChangeRole = async (value: string) => {
		userStore.userInfo = {};
		await userStore.loginAction({
			username: value,
			password: 'admin123'
		});
		router.push('/');
	};
</script>

<template>
	<SoCard title="权限示例" class="h-full">
		<div class="p-4">
			<div>
				<h1 class="text-6">当前角色: {{ currRole }}</h1>
				<el-button-group class="m-4">
					<el-button v-for="item in Object.keys(permissionObj)" :key="item" @click="handleChangeRole(item)">{{ item }}</el-button>
				</el-button-group>
			</div>
			<div class="my-4">
				<h1 class="text-6">指令v-permissions 和 v-roles</h1>
				<el-button-group class="m-4">
					<el-button v-roles="['admin']">仅admin可见</el-button>
					<el-button v-roles="['common']">common</el-button>
					<el-button v-permissions="['common:permissions:view']" @click="handleClick">
						具有 ['common:permissions:view'] 权限可访问
					</el-button>
				</el-button-group>
			</div>
			<div>
				<h1 class="text-6">函数usePermission</h1>
				<el-button-group class="m-4">
					<el-button v-if="isAdmin">仅admin可见</el-button>
					<el-button v-if="isCommon">common可见</el-button>
					<el-button v-if="isCommonAndNormal">common和normal可见</el-button>
					<el-button v-if="isViewPerm" @click="handleClick">具有 ['common:permissions:view'] 权限可访问</el-button>
				</el-button-group>
			</div>
		</div>
	</SoCard>
</template>
