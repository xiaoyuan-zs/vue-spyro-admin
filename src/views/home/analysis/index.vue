<script setup lang="ts">
	import { useEchart01 } from './hooks';
	defineOptions({
		name: 'Analysis'
	});

	const { option01 } = useEchart01();

	const statistics = [
		{
			icon: 'ep:trend-charts',
			title: '在线评标率',
			data: '78%',
			bgColor: 'bg-sky-300',
			gtColor: 'to-sky-300'
		},
		{
			icon: 'ant-design:property-safety-filled',
			title: '进场金额',
			data: '￥9204.00',
			bgColor: 'bg-teal-300',
			gtColor: 'to-teal-300'
		},
		{
			icon: 'ant-design:account-book-filled',
			title: '结算金额',
			data: '￥10273.40',
			bgColor: 'bg-sky-300',
			gtColor: 'to-sky-300'
		},
		{
			icon: 'ant-design:database-filled',
			title: '开累消耗',
			data: '6480',
			bgColor: 'bg-indigo-300',
			gtColor: 'to-indigo-300'
		},
		{
			icon: 'ant-design:golden-filled',
			title: '现有库存',
			data: '￥9204.00',
			bgColor: 'bg-teal-300',
			gtColor: 'to-teal-300'
		}
	];
</script>

<template>
	<div class="pb-4">
		<so-card title="数据统计" :underline="false">
			<div class="w-full grid grid-cols-5 gap-4">
				<div v-for="(item, index) in statistics" :key="index" :class="`p-3 rounded-1.5 text-background ${item.bgColor}`">
					<div class="flex flex-justify-start items-center">
						<Icon :name="item.icon" :size="16" />
						<span class="block pl-1">{{ item.title }}</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<span class="text-size-xl">{{ item.data }}</span>
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon :name="item.icon" :size="40" />
							<div :class="`absolute-lt w-full h-full bg-gradient-to-b from-transparent ${item.gtColor}`"></div>
						</div>
					</div>
				</div>
			</div>
		</so-card>
		<el-row :gutter="10" class="mt-4">
			<el-col :xs="24" :sm="24" :md="16">
				<so-card title="货物支出统计" :underline="false">
					<Echarts :option="option01" height="300px" />
				</so-card>
			</el-col>
		</el-row>
	</div>
</template>
