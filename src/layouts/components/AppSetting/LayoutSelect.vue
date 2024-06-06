<script lang="tsx">
	import { useLayoutStore } from '@/store';
	import { unref } from 'vue';

	export default defineComponent({
		name: 'LayoutSelect',
		setup() {
			const layoutStore = useLayoutStore();
			const layoutMode = computed(() => layoutStore.layout);

			const handleChangeLayout = (layout: LayoutConfig) => {
				layoutStore.$patch({ layout });
			};

			return () => (
				<div class="flex-center flex-wrap gap-x-8 gap-y-4">
					<el-tooltip effect="dark" content="纵向模式" placement="bottom">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 transition-delay-150 flex gap-x-1 cursor-pointer b-2 b-transparent hover:b-primary',
								{ 'b-primary': unref(layoutMode) === 'vertical' }
							]}
							onClick={() => handleChangeLayout('vertical')}>
							<div class="w-6 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="w-full flex-col gap-y-1">
								<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
								<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content="经典模式" placement="bottom">
						<div
							class="w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 transition-delay-150 flex-col gap-y-1 cursor-pointer b-2 b-transparent hover:b-primary"
							onClick={() => handleChangeLayout('basic')}>
							<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
							<div class="w-full flex flex-1 gap-x-1">
								<div class="w-6 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
								<div class="w-full h-full bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content="横向模式" placement="bottom">
						<div
							class="w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 transition-delay-150 flex-col gap-y-1 cursor-pointer b-2 b-transparent hover:b-primary"
							onClick={() => handleChangeLayout('horizontal')}>
							<div class="w-full h-3 bg-[var(--el-color-primary-light-4)] rounded-1" />
							<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content="栅格模式" placement="bottom">
						<div
							class="w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 transition-delay-150 flex gap-x-1 cursor-pointer b-2 b-transparent hover:b-primary"
							onClick={() => handleChangeLayout('lattice')}>
							<div class="w-2 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="w-5 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="flex-1 h-full flex-col gap-y-1">
								<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
								<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content="混合模式" placement="bottom">
						<div
							class="w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 transition-delay-150 flex-col gap-y-1 cursor-pointer b-2 b-transparent hover:b-primary"
							onClick={() => handleChangeLayout('mixins')}>
							<div class="w-full h-3 bg-[var(--el-color-primary-light-4)] rounded-1" />
							<div class="w-full flex flex-1 gap-x-1">
								<div class="w-6 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
								<div class="w-full h-full bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
				</div>
			);
		}
	});
</script>
