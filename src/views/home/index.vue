<script setup lang="ts" name="Home">
	import echarts, { type ECOption } from '@/plugins/echarts';
	import { useEcharts } from '@/hooks';

	const projectList = reactive([
		{
			icon: 'el-icon-checked',
			projectName: '消息列表体验优化',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪小分队',
			createTime: '2小时前'
		},
		{
			icon: 'el-icon-checked',
			projectName: 'xx 平台',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪小分队',
			createTime: '2小时前'
		},
		{
			icon: 'el-icon-checked',
			projectName: '5月日常小需求',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪小分队',
			createTime: '2小时前'
		},
		{
			icon: 'el-icon-checked',
			projectName: '功能效能',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪小分队',
			createTime: '2小时前'
		},
		{
			icon: 'el-icon-checked',
			projectName: '智能运营中心',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪精英战队',
			createTime: '2小时前'
		},
		{
			icon: 'el-icon-checked',
			projectName: 'bug处理',
			projectDesc: '这是一条描述信息这是一条描述信息这是一条描述信息',
			author: '特怪二分队',
			createTime: '2小时前'
		}
	]);

	type dictsType = {
		dictLabel: string;
		dictValue: string | number;
		color?: string;
	};

	// TODO: 实现字典中的dictValue值是什么类型，该函数就传入什么类型， 后期改为通用方法
	const echoDictLabel = (dicts: dictsType[], dictValue: string | number) => {
		return dicts.find((item) => item.dictValue == dictValue)?.dictLabel;
	};

	const echoDictColor = (dicts: dictsType[], dictValue: string | number) => {
		return dicts.find((item) => item.dictValue == dictValue)?.color;
	};

	// 消息类型，后面改为字典
	const messageType = [
		{
			dictLabel: '消息',
			dictValue: '01',
			color: 'text-emerald-500'
		},
		{
			dictLabel: '公告',
			dictValue: '02',
			color: 'text-orange-500'
		},
		{
			dictLabel: '通知',
			dictValue: '03',
			color: 'text-blue-500'
		},
		{
			dictLabel: '活动',
			dictValue: '04',
			color: 'text-indigo-500'
		}
	];

	const messageList = reactive([
		{
			type: '01',
			desc: 'xxx即将于2023年12月25日入职, 请提前准备相关流程',
			createTime: '2023-12-20'
		},
		{
			type: '02',
			desc: 'xxx即将于2023年12月25日入职, 请提前准备相关流程',
			createTime: '2023-12-20'
		},
		{
			type: '03',
			desc: 'xxx即将于2023年12月25日入职, 请提前准备相关流程',
			createTime: '2023-12-20'
		},
		{
			type: '04',
			desc: 'xxx即将于2023年12月25日入职, 请提前准备相关流程',
			createTime: '2023-12-20'
		}
	]);

	const radarEcharts = ref<HTMLDivElement | null>(null);
	const barEcharts = ref<HTMLDivElement | null>(null);

	const radarOptions = ref<ECOption>({
		title: {
			// text: 'Basic Radar Chart'
		},
		tooltip: {
			show: true,
			trigger: 'item',
			position: 'right'
		},
		radar: {
			// 雷达区域分割颜色
			// splitArea: {
			//     areaStyle: {
			//         color: ['rgba(201, 223, 255, 0.15)', 'rgba(201, 223, 255, 0.95)'].reverse()
			//     }
			// },
			indicator: [
				{ name: '前端开发', min: 0, max: 20 },
				{ name: '后端开发', min: 0, max: 20 },
				{ name: '产品经理', min: 0, max: 20 },
				{ name: 'UI设计', min: 0, max: 20 },
				{ name: '测试', min: 0, max: 20 }
			]
		},
		series: [
			{
				name: '岗位',
				type: 'radar',
				symbol: 'circle',
				symbolSize: 6,
				itemStyle: {
					borderColor: 'rgba(108,254,255, 0.6)',
					color: '#fff',
					borderWidth: 1
				},
				lineStyle: {
					color: 'rgba(108,254,255, 0.6)'
				},
				areaStyle: {
					// 单项区域填充样式
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: 'rgba(108,254,255, 0.6)'
							},
							{
								offset: 1,
								color: 'rgba(255,255,255, 0.65)'
							}
						],
						false
					),
					// opacity:0.75, // 区域透明度
					// 设置扇形的阴影
					shadowBlur: 12,
					shadowColor: 'rgba(108,254,255, 0.5)',
					shadowOffsetX: 6,
					shadowOffsetY: 6
				},
				data: [
					{
						value: [10, 19, 5, 3, 3]
					}
				]
			}
		]
	});

	const barOptions = ref<ECOption>({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '总内容量',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				showSymbol: true, // 只有在 tooltip hover 的时候显示
				symbolSize: 5,
				label: {
					show: true
				},
				// 折线拐点标志的样式。
				itemStyle: {
					color: 'rgba(0,144,255, 0.8)'
				},
				lineStyle: {
					color: 'rgba(54,206,158, 0.8)'
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: 'rgba(173,235,216, 0.8)'
							},
							{
								offset: 1,
								color: 'rgba(198,230,255, 0.6)'
							}
						],
						false
					),
					shadowColor: 'rgba(198,230,255, 0.5)',
					shadowBlur: 10
				},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			}
		]
	});

	onMounted(() => {
		useEcharts(radarEcharts.value as HTMLDivElement, radarOptions as Ref<ECOption>);
		useEcharts(barEcharts.value as HTMLDivElement, barOptions as Ref<ECOption>);
	});
</script>

<template>
	<div class="pb-4">
		<el-card shadow="never">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="16">
					<div class="flex items-center h-full">
						<img src="@/assets/images/avatar.jpg" class="w-20 rounded-full p-3" alt="avatar" />
						<div class="flex-col justify-around">
							<h3 class="font-bold text-lg">Admin, 欢迎你!</h3>
							<span class="text-gray text-sm">一天写点，天天写点，不知道写了个啥，今天在下雪，天气很冷!</span>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24" :md="8">
					<div class="h-full flex-center justify-around py-4">
						<div class="flex-col-center">
							<span class="text-zinc-500">项目数</span>
							<span class="text-6 font-medium">16</span>
						</div>
						<div class="flex-col-center">
							<span class="text-zinc-500">待办任务</span>
							<span class="text-6 font-medium">
								10/
								<span class="text-zinc-500">24</span>
							</span>
						</div>
						<div class="flex-col-center">
							<span class="text-zinc-500">项目访问</span>
							<span class="text-6 font-medium">2,222</span>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-card>
		<el-row :gutter="10">
			<el-col :xs="24" :lg="16" class="mt-3">
				<el-card shadow="never">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased ml-4 title-before">进行中的项目</h3>
						<el-link type="primary" :underline="false">全部项目</el-link>
					</div>
					<div class="grid gap-8 py-4 lg:h-66 <lg:grid-cols-2 <sm:grid-cols-1 <md:grid-cols-2 grid-cols-3">
						<div v-for="(item, index) in projectList" :key="index">
							<div class="flex items-center">
								<Icon :name="item.icon" size="20" color="var(--el-color-primary)" />
								<span class="pl-2 font-700">{{ item.projectName }}</span>
							</div>
							<p class="text-gray py-2 <sm:truncate line-clamp-2">{{ item.projectDesc }}</p>
							<div class="flex justify-between">
								<span class="text-neutral-500">{{ item.author }}</span>
								<span class="text-neutral-400">{{ item.createTime }}</span>
							</div>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :xs="24" :lg="8" class="mt-3">
				<el-card shadow="never">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased ml-4 title-before">岗位分布</h3>
					</div>
					<div ref="radarEcharts" class="w-full h-66"></div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="10">
			<el-col :xs="24" :lg="16" class="mt-3">
				<el-card shadow="never">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased ml-4 title-before">内容数据</h3>
					</div>
					<div ref="barEcharts" class="w-full h-105.5"></div>
				</el-card>
			</el-col>
			<el-col :xs="24" :lg="8" class="mt-3">
				<el-row>
					<el-col>
						<el-card shadow="never">
							<div class="flex justify-between relative">
								<h3 class="font-semibold text-base antialiased ml-4 title-before">动态</h3>
							</div>
							<div class="w-full h-50 py-4">
								<el-scrollbar>
									<div v-for="(_, index) in 10" :key="index" class="flex w-full items-center">
										<img src="@/assets/images/avatar.jpg" class="w-15 rounded-full p-3" alt="avatar" />
										<div class="flex-col h-full">
											<span class="font-500 subpixel-antialiased truncate <sm:w-75">
												林冬冬 在 特怪小分队 新建项目 xxxxxxxxxxxxxxxxxxxxxxxxxx
											</span>
											<span class="text-neutral-400">2 分钟前</span>
										</div>
									</div>
								</el-scrollbar>
							</div>
						</el-card>
					</el-col>
					<el-col class="mt-3">
						<el-card shadow="never">
							<div class="flex justify-between relative">
								<h3 class="font-semibold text-base antialiased ml-4 title-before">消息提醒</h3>
							</div>
							<div class="w-full h-36 py-4">
								<el-scrollbar>
									<div v-for="(item, index) in messageList" :key="index" class="flex w-full p-3 flex-nowrap items-center">
										<span :class="echoDictColor(messageType, item.type)" class="flex-none">
											{{ echoDictLabel(messageType, item.type) }}
										</span>
										<span class="font-500 subpixel-antialiased truncate flex-1 px-4 <sm:w-75">
											{{ item.desc }}
										</span>
										<span class="text-neutral-400 flex-none">{{ item.createTime }}</span>
									</div>
								</el-scrollbar>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss"></style>
