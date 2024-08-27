<script setup lang="ts" name="Home">
	import { useEcharts } from '@/hooks';
	import { selectDictLabel } from '@spyro/utils';
	import { useBarEcharts } from './hooks/index';
	import { useUserStore } from '@/store';

	const userStore = useUserStore();

	const projectList = [
		{
			icon: 'logos:github-icon',
			projectName: 'Github',
			projectDesc: '是一个面向开源及私有软件项目的托管平台。',
			author: '开源',
			createTime: '2021-07-04'
		},
		{
			icon: 'logos:vue',
			projectName: 'Vue',
			projectDesc: '渐进式 JavaScript 框架',
			author: '尤大大',
			createTime: '2021-07-04'
		},
		{
			icon: 'logos:react',
			projectName: 'React',
			projectDesc: '用于构建用户界面的 JavaScript 库',
			author: '技术大牛',
			createTime: '2020-08-13'
		},
		{
			icon: 'logos:javascript',
			projectName: 'JavaScript',
			projectDesc: '路是走出来的，而不是空想出来的',
			author: '技术大牛',
			createTime: '2020-08-13'
		},
		{
			icon: 'logos:element',
			projectName: 'ElemenPlus',
			projectDesc: '一个Vue3的UI框架',
			author: '技术大牛',
			createTime: '2020-08-13'
		},
		{
			icon: 'logos:vitejs',
			projectName: 'Vite',
			projectDesc: '下一代的前端工具链',
			author: '尤大大',
			createTime: '2020-08-13'
		}
	];

	type dictsType = {
		dictLabel: string;
		dictValue: string | number;
		color?: string;
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

	const messageList = [
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
	];

	const { barEcharts, barOptions } = useBarEcharts();

	const nickname = computed(() => userStore.nickname);

	onMounted(() => {
		useEcharts(unref(barEcharts)!, unref(barOptions));
	});
</script>

<template>
	<div class="pb-4">
		<el-card shadow="hover">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="16">
					<div class="flex items-center h-full">
						<img src="@/assets/images/avatar.jpg" class="w-20 rounded-full p-3" alt="avatar" />
						<div class="flex-col justify-around">
							<h3 class="font-bold text-lg">{{ nickname }}, 欢迎你!</h3>
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
		<el-row :gutter="16">
			<el-col :xs="24" :lg="16" class="mt-4">
				<el-card shadow="hover">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased title-before">项目</h3>
					</div>
					<div class="grid gap-8 py-4 lg:h-66 <lg:grid-cols-2 <sm:grid-cols-1 <md:grid-cols-2 grid-cols-3">
						<div v-for="(item, index) in projectList" :key="index">
							<div class="flex items-center">
								<Icon :name="item.icon" :size="30" color="var(--el-color-primary)" />
								<span class="pl-4 font-700">{{ item.projectName }}</span>
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
			<el-col :xs="24" :lg="8" class="mt-4">
				<el-card shadow="hover">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased title-before">快捷操作</h3>
					</div>
					<div class="w-full h-66" />
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="16">
			<el-col :xs="24" :lg="16" class="mt-4">
				<el-card shadow="hover">
					<div class="flex justify-between relative">
						<h3 class="font-semibold text-base antialiased title-before">内容数据</h3>
					</div>
					<div ref="barEcharts" class="w-full h-106.5" />
				</el-card>
			</el-col>
			<el-col :xs="24" :lg="8" class="mt-4">
				<el-row>
					<el-col>
						<el-card shadow="hover">
							<div class="flex justify-between relative">
								<h3 class="font-semibold text-base antialiased title-before">动态</h3>
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
					<el-col class="mt-4">
						<el-card shadow="hover">
							<div class="flex justify-between relative">
								<h3 class="font-semibold text-base antialiased title-before">消息提醒</h3>
							</div>
							<div class="w-full h-36 py-4">
								<el-scrollbar>
									<div v-for="(item, index) in messageList" :key="index" class="flex w-full p-3 flex-nowrap items-center">
										<span :class="echoDictColor(messageType, item.type)" class="flex-none">
											{{ selectDictLabel(messageType, item.type) }}
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

<style lang="scss" scoped>
	:deep(.el-card) {
		@apply b-0;
	}
</style>
