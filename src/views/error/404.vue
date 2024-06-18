<script setup lang="ts">
	import { AxiosConfig } from '@spyro/axios';

	const request = new AxiosConfig({
		interceptors: {},
		abortRepetitiveRequest: true
	});
	const getImageOne = () => {
		request
			.request({
				url: 'https://picsum.photos/200/300'
			})
			.then((res) => {});
	};
</script>

<template>
	<div>
		<!-- 问题： 当两个按钮先后请求同一个请求，也会出现前者中断请求的问题 -->
		<el-button type="primary" @click="getImageOne">随机图片一</el-button>
		<el-button type="primary" @click="getImageOne">随机图片二</el-button>
	</div>
</template>

<style lang="scss" scoped></style>
