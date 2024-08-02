<script setup lang="ts">
	defineOptions({
		name: 'Analysis'
	});

	const statistics = [
		{
			icon: 'ep:trend-charts',
			title: '在线评标率',
			data: '78%',
			bgColor: 'bg-sky-300'
		},
		{
			icon: 'ant-design:property-safety-filled',
			title: '进场金额',
			data: '￥9204.00',
			bgColor: 'bg-teal-300'
		},
		{
			icon: 'ant-design:account-book-filled',
			title: '结算金额',
			data: '￥10273.40',
			bgColor: 'bg-sky-300'
		},
		{
			icon: 'ant-design:database-filled',
			title: '开累消耗',
			data: '6480',
			bgColor: 'bg-indigo-300'
		},
		{
			icon: 'ant-design:golden-filled',
			title: '现有库存',
			data: '￥9204.00',
			bgColor: 'bg-teal-300'
		}
	];
</script>

<template>
	<div class="pb-4">
		<so-card title="数据统计" :underline="false">
			<div class="w-full grid grid-cols-5 gap-4">
				<div v-for="(item, index) in statistics" :key="index">{{ item.data }}</div>
			</div>
		</so-card>
	</div>
</template>
