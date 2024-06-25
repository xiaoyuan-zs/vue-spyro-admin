<script setup lang="ts">
	import { getUserList } from '@/api/user';
	const getList = () => {
		getUserList({ pageNum: 2, pageSize: 10 }).then((res) => {
			console.log(111, res.data);
		});
	};
</script>

<template>
	<div>
		<el-button @click="getList">yonghu</el-button>
	</div>
</template>

<style lang="scss" scoped></style>
