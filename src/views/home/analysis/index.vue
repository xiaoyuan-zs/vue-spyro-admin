<script setup lang="ts">
	import { useEchart01, useEchart02, useEchart03, useEchart04 } from './hooks';
	defineOptions({
		name: 'Analysis'
	});

	const { option01 } = useEchart01();
	const { option02 } = useEchart02();
	const { option03 } = useEchart03();
	const { option04 } = useEchart04();

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

	const preOrders = new Array(20).fill({
		name: '南京物资运输管理有限公司',
		unique: 'PO.265432',
		phone: '12345678901',
		status: '已出库',
		time: '2021-01-01'
	});
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
		<el-row :gutter="16" class="mt-4 h-90">
			<el-col :xs="24" :sm="24" :md="16" class="h-full">
				<so-card title="货物支出统计" :underline="false" class="h-full">
					<Echarts :option="option01" height="100%" />
				</so-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" class="h-full">
				<so-card title="带出门订单" :underline="false" class="h-full">
					<el-scrollbar>
						<div v-for="(item, index) in preOrders" :key="index" class="py-1 flex-between">
							<span>
								<span :class="['p-1 text-size-12px bg-[var(--el-bg-color-page)]', index < 3 && 'bg-red text-background']">
									{{ index + 1 }}
								</span>
								<span class="ml-3 text-sm">{{ item.name }}</span>
							</span>
							<span class="text-sm">{{ item.unique }}</span>
						</div>
					</el-scrollbar>
				</so-card>
			</el-col>
		</el-row>
		<el-row :gutter="16" class="mt-4 h-80">
			<el-col :xs="24" :sm="24" :md="12" class="h-full">
				<so-card title="资产分类占比" :underline="false" class="h-full">
					<Echarts :option="option02" height="100%" />
				</so-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" class="h-full">
				<so-card title="货物处理率" :underline="false" class="h-full">
					<Echarts :option="option03" height="100%" />
				</so-card>
			</el-col>
		</el-row>
		<el-row :gutter="16" class="mt-4 h-100">
			<el-col :xs="24" :sm="24" :md="24" class="h-full">
				<so-card title="每月物质统计" :underline="false" class="h-full">
					<Echarts :option="option04" height="100%" />
				</so-card>
			</el-col>
		</el-row>
	</div>
</template>
