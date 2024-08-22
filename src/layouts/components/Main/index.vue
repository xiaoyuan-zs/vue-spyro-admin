<script setup lang="ts" name="AppMain">
	import { useLayoutStore, useAppStore, usePermissionStore } from '@/store';
	import { ElScrollbar } from 'element-plus';
	import { Transition } from 'vue';
	import { useRoute } from 'vue-router';

	const permissionStore = usePermissionStore();
	const layoutStore = useLayoutStore();
	const appStore = useAppStore();
	const route = useRoute();

	// 获取定义的 动画对象
	const transitions = computed(() => {
		return (route: any) => {
			return route.meta.transition;
		};
	});

	const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
	// 更新滚动条位置和滚动条状态
	watch(
		() => route.path,
		() => {
			scrollbarRef.value?.setScrollTop(0);
			scrollbarRef.value?.update();
		}
	);

	//自定义动画组件
	const transitionMain = defineComponent({
		name: 'TransitionMain',
		props: {
			route: {
				type: undefined,
				required: true
			}
		},
		render() {
			const transitionName = transitions.value(this.route)?.name || layoutStore.animateMode;
			const enterTransition = transitions.value(this.route)?.enterTransition;
			const leaveTransition = transitions.value(this.route)?.leaveTransition;
			return h(
				Transition,
				{
					name: transitionName,
					enterActiveClass: enterTransition ? `animate__animated ${enterTransition}` : undefined,
					leaveActiveClass: leaveTransition ? `animate__animated ${leaveTransition}` : undefined,
					mode: 'out-in',
					appear: true
				},
				{
					default: () => [(this.$slots as any).default()]
				}
			);
		}
	});
</script>

<template>
	<el-main class="!p-0 bg-[var(--el-bg-color-page)]">
		<!-- 自定义指令实现 滚动加载 -->
		<el-scrollbar ref="scrollbarRef">
			<div class="h-full p-4">
				<!-- 解决子元素超出父元素高度问题 -->
				<router-view>
					<template #default="{ Component, route }">
						<el-backtop target=".el-main div .el-scrollbar__wrap" title="回到顶部" />
						<transitionMain :route>
							<keep-alive :include="permissionStore.cachePages">
								<component :is="Component" v-if="appStore.reload" :key="route.name" />
							</keep-alive>
						</transitionMain>
					</template>
				</router-view>
			</div>
		</el-scrollbar>
	</el-main>
</template>
