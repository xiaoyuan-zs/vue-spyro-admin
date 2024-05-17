import ToolLeft from './NavBar/ToolLeft.vue';
import ToolRight from './NavBar/ToolRight.vue';
import { Icon } from '@/components/Icon/index';
import { MainApp, Menu } from './index';
import { useAppStore } from '@/store';
import { settingConfig } from '@/config';
import { ElContainer, ElAside, ElHeader } from 'element-plus';

const appTitle = import.meta.env.VITE_APP_TITLE;

const appStore = useAppStore();

// 搜索宽度
const { asideMaxWidth, asideMinWidth } = settingConfig;
const { isMobile, isCollapse } = storeToRefs(appStore);
const collapseWidth = computed(() =>
	isMobile.value ? (isCollapse.value ? '0' : asideMaxWidth) : appStore.isCollapse ? asideMinWidth : asideMaxWidth
);

const asideClass =
	'py-2 flex-col-stretch bg-background border-r-1 border-solid border-[var(--el-color-info-light-8)] transition-width duration-300';

const headerClass =
	'w-full flex-y-center justify-between border-b-1 border-solid border-[var(--el-color-info-light-8)] h-14 p-x-0 bg-[var(--el-bg-color)]';

export const useRenderLayout = () => {
	const LayoutVertical = () => {
		return (
			<>
				<ElAside class={[asideClass, { 'p-0 fixed top-0 bottom-0 left-0 z-9999': appStore.isMobile }]} width={collapseWidth.value}>
					<div class="flex-center shrink-0 h-14 w-full nowrap-hidden cursor-pointer">
						<Icon name="vx:logo" size={30} color="var(--el-color-primary)" />
						<h3 class="ml-2 text-4 text-primary truncate font-bold">{appTitle}</h3>
					</div>
					<Menu />
				</ElAside>
				<ElContainer direction="vertical" class="relative">
					<ElHeader class={headerClass}>
						<ToolLeft />
						<ToolRight />
					</ElHeader>
					<MainApp />
				</ElContainer>
			</>
		);
	};

	return {
		LayoutVertical
	};
};
