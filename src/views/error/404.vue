<script setup lang="ts">
	import { getUserList, getUserById } from '@/api/user';
	const getList = () => {
		getUserList({ pageNum: 2, pageSize: 10, ids: [1, 2] }).then((res) => {
			console.log(111, res.data);
		});
	};

	const getOneUser = () => {
		getUserById('123456').then(() => {});
	};
</script>

<template>
	<div>
		<el-button type="primary" @click="getList">用户列表</el-button>
		<el-button type="primary" @click="getOneUser">某个用户</el-button>
	</div>
</template>

<style lang="scss" scoped></style>
