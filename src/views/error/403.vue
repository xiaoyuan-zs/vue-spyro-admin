<script setup lang="ts">
	import { useRouter } from 'vue-router';
	const router = useRouter();

	const backHome = () => {
		router.push('/');
	};
</script>

<template>
	<div class="flex-center">
		<div class="flex-col-center">
			<Icon name="spyro:403" :size="600" />
			<el-button type="primary" @click="backHome">返回首页</el-button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
