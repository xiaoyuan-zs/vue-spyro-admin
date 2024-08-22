<script setup lang="ts">
	import { useEchart01, useEchart02, useEchart03, useEchart04 } from './hooks';
	import { useTransition } from '@vueuse/core';

	defineOptions({
		name: 'Analysis'
	});

	const { option01 } = useEchart01();
	const { option02 } = useEchart02();
	const { option03 } = useEchart03();
	const { option04 } = useEchart04();

	const preOrders = new Array(20).fill({
		name: '南京物资运输管理有限公司',
		unique: 'PO.265432',
		phone: '12345678901',
		status: '已出库',
		time: '2021-01-01'
	});

	const InitialValue = ref(0);
	const InitialValue1 = ref(0);
	const InitialValue2 = ref(0);
	const InitialValue3 = ref(0);
	const InitialValue4 = ref(0);

	const data = useTransition(InitialValue, {
		duration: 1500
	});
	const data1 = useTransition(InitialValue1, {
		duration: 1500
	});
	const data2 = useTransition(InitialValue2, {
		duration: 1500
	});
	const data3 = useTransition(InitialValue3, {
		duration: 1500
	});
	const data4 = useTransition(InitialValue4, {
		duration: 1500
	});

	onMounted(() => {
		InitialValue.value = 78;
		InitialValue1.value = 9204.0;
		InitialValue2.value = 10273.4;
		InitialValue3.value = 6480;
		InitialValue4.value = 9204;
	});
</script>

<template>
	<div class="pb-4">
		<so-card title="数据统计" :underline="false">
			<div class="w-full grid <xl:grid-cols-3 <sm:grid-cols-1 grid-cols-5 gap-4">
				<div class="p-3 rounded-1.5 text-background bg-sky-300">
					<div class="flex flex-justify-start items-center">
						<Icon name="ep:trend-charts" :size="16" />
						<span class="block pl-1">在线评标率(%)</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<el-statistic :value="data" value-style="color: var(--el-bg-color)" />
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon name="ep:trend-charts" :size="40" />
							<div class="absolute-lt w-full h-full bg-gradient-to-b from-transparent to-sky-300" />
						</div>
					</div>
				</div>
				<div class="p-3 rounded-1.5 text-background bg-teal-300">
					<div class="flex flex-justify-start items-center">
						<Icon name="ant-design:property-safety-filled" :size="16" />
						<span class="block pl-1">进场金额(￥)</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<el-statistic :value="data1" :precision="2" value-style="color: var(--el-bg-color)" />
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon name="ant-design:property-safety-filled" :size="40" />
							<div class="absolute-lt w-full h-full bg-gradient-to-b from-transparent to-teal-300" />
						</div>
					</div>
				</div>
				<div class="p-3 rounded-1.5 text-background bg-sky-300">
					<div class="flex flex-justify-start items-center">
						<Icon name="ant-design:account-book-filled" :size="16" />
						<span class="block pl-1">结算金额(￥)</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<el-statistic :value="data2" :precision="2" value-style="color: var(--el-bg-color)" />
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon name="ant-design:account-book-filled" :size="40" />
							<div class="absolute-lt w-full h-full bg-gradient-to-b from-transparent to-sky-300" />
						</div>
					</div>
				</div>
				<div class="p-3 rounded-1.5 text-background bg-indigo-300">
					<div class="flex flex-justify-start items-center">
						<Icon name="ant-design:database-filled" :size="16" />
						<span class="block pl-1">开累消耗</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<el-statistic :value="data3" value-style="color: var(--el-bg-color)" />
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon name="ant-design:database-filled" :size="40" />
							<div class="absolute-lt w-full h-full bg-gradient-to-b from-transparent to-indigo-300" />
						</div>
					</div>
				</div>
				<div class="p-3 rounded-1.5 text-background bg-teal-300">
					<div class="flex flex-justify-start items-center">
						<Icon name="ant-design:golden-filled" :size="16" />
						<span class="block pl-1">现有库存</span>
					</div>
					<div class="flex flex-justify-between items-end">
						<el-statistic :value="data4" value-style="color: var(--el-bg-color)" />
						<!-- 实现文字渐变效果 -->
						<!-- <div class="bg-gradient-to-b from-white to-transparent bg-clip-text"> -->
						<div class="relative">
							<Icon name="ant-design:golden-filled" :size="40" />
							<div class="absolute-lt w-full h-full bg-gradient-to-b from-transparent to-teal-300" />
						</div>
					</div>
				</div>
			</div>
		</so-card>
		<el-row :gutter="16">
			<el-col :xs="24" :lg="16" class="mt-4 h-90">
				<so-card title="货物支出统计" :underline="false" class="h-full">
					<Echarts :option="option01" height="100%" />
				</so-card>
			</el-col>
			<el-col :xs="24" :lg="8" class="mt-4 h-90">
				<so-card title="待出门订单" :underline="false" class="h-full">
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
		<el-row :gutter="16">
			<el-col :xs="24" :sm="24" :md="12" class="mt-4 h-80">
				<so-card title="资产分类占比" :underline="false" class="h-full">
					<Echarts :option="option02" height="100%" />
				</so-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" class="mt-4 h-80">
				<so-card title="货物处理率" :underline="false" class="h-full">
					<Echarts :option="option03" height="100%" />
				</so-card>
			</el-col>
		</el-row>
		<el-row :gutter="16">
			<el-col :xs="24" :sm="24" :md="24" class="mt-4 h-100">
				<so-card title="每月物质统计" :underline="false" class="h-full">
					<Echarts :option="option04" height="100%" />
				</so-card>
			</el-col>
		</el-row>
	</div>
</template>
