<script lang="tsx">
	import { useLayoutStore } from '@/store';
	import { unref } from 'vue';
	import { useI18n } from 'vue-i18n';

	export default defineComponent({
		name: 'LayoutSelect',
		setup() {
			const { t } = useI18n();
			const layoutStore = useLayoutStore();
			const layoutMode = computed(() => layoutStore.layout);
			const darkMenu = computed(() => layoutStore.darkMenu);
			const html = document.documentElement as HTMLElement;

			const handleChangeLayout = (layout: LayoutConfig) => {
				if (unref(darkMenu)) {
					['horizontal', 'basic', 'mixins'].includes(layout)
						? html.removeAttribute('data-theme')
						: html.setAttribute('data-theme', 'menu-dark');
				}
				layoutStore.$patch({ layout });
			};

			return () => (
				<div class="flex-center flex-wrap gap-x-8 gap-y-4">
					<el-tooltip effect="dark" content={t('platform.verticalMode')} placement="top">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 flex gap-x-1 cursor-pointer b-2 hover:b-primary',
								unref(layoutMode) === 'vertical' ? 'b-primary' : 'b-transparent'
							]}
							onClick={() => handleChangeLayout('vertical')}>
							<div class="w-6 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="w-full flex-col gap-y-1">
								<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
								<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content={t('platform.classicalMode')} placement="top">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 flex-col gap-y-1 cursor-pointer b-2 hover:b-primary',
								unref(layoutMode) === 'basic' ? 'b-primary' : 'b-transparent'
							]}
							onClick={() => handleChangeLayout('basic')}>
							<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
							<div class="w-full flex flex-1 gap-x-1">
								<div class="w-6 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
								<div class="w-full h-full bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content={t('platform.horizontalMode')} placement="top">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 flex-col gap-y-1 cursor-pointer b-2 hover:b-primary',
								unref(layoutMode) === 'horizontal' ? 'b-primary' : 'b-transparent'
							]}
							onClick={() => handleChangeLayout('horizontal')}>
							<div class="w-full h-3 bg-[var(--el-color-primary-light-4)] rounded-1" />
							<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content={t('platform.latticeMode')} placement="top">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 flex gap-x-1 cursor-pointer b-2 hover:b-primary',
								unref(layoutMode) === 'lattice' ? 'b-primary' : 'b-transparent'
							]}
							onClick={() => handleChangeLayout('lattice')}>
							<div class="w-2 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="w-5 h-full rounded-1 bg-[var(--el-color-primary-light-4)]" />
							<div class="flex-1 h-full flex-col gap-y-1">
								<div class="w-full h-3 bg-[var(--el-color-primary-light-7)] rounded-1" />
								<div class="w-full flex-1 bg-[var(--el-color-primary-light-9)] rounded-1" />
							</div>
						</div>
					</el-tooltip>
					<el-tooltip effect="dark" content={t('platform.mixedMode')} placement="top">
						<div
							class={[
								'w-25 h-17 p-1 shadow-[var(--el-box-shadow-lighter)] rounded-1 flex-col gap-y-1 cursor-pointer b-2 hover:b-primary',
								unref(layoutMode) === 'mixins' ? 'b-primary' : 'b-transparent'
							]}
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
