import { Icon } from '@/components/Icon/index';
import { MainApp, Menu, Tabs, ToolLeft, ToolRight, CollapseIcon, BreadCrumb, VerticalMenu, HorizontalMenu } from './index';
import { useAppStore } from '@/store';
import { unref } from 'vue';
import { ElContainer, ElAside, ElHeader, ElScrollbar } from 'element-plus';
import router from '@/router';

const appTitle = import.meta.env.VITE_APP_TITLE;

const appStore = useAppStore();

const isMobile = computed(() => appStore.isMobile);
const isCollapse = computed(() => appStore.isCollapse);
const collapseWidth = computed(() =>
	unref(isMobile)
		? unref(isCollapse)
			? '!w-0'
			: '!w-[var(--left-menu-max-width)]'
		: unref(isCollapse)
			? '!w-[var(--left-menu-min-width)]'
			: '!w-[var(--left-menu-max-width)]'
);

const goHome = () => router.push('/index');

const Logo = () => (
	<div class={'flex-center shrink-0 h-[var(--logo-height)] w-full nowrap-hidden cursor-pointer'} onClick={goHome}>
		<Icon name="spyro:logo" size={30} color="var(--el-color-primary)" />
		<h3 class="ml-2 text-4 text-primary truncate font-bold">{appTitle}</h3>
	</div>
);

const asideClass =
	'flex-col-stretch bg-[var(--left-menu-bg-color)] py-1 border-r-1 border-solid border-[var(--el-color-info-light-8)] transition-width duration-300';

const headerClass =
	'w-full !h-[var(--top-header-height)] flex-y-center justify-between border-b-1 border-solid border-[var(--el-color-info-light-8)] !p-x-2 bg-[var(--el-bg-color)]';

export const useRenderLayout = () => {
	const LayoutVertical = () => {
		return (
			<>
				<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 !b-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
					<div class="flex-center shrink-0 h-[var(--top-header-height)] w-full nowrap-hidden cursor-pointer" onClick={goHome}>
						<Icon name="spyro:logo" size={30} color="var(--el-color-primary)" />
						{unref(isCollapse) ? undefined : <h3 class="ml-2 text-4 text-primary truncate font-bold">{appTitle}</h3>}
					</div>
					<ElScrollbar wrap-class="scrollbar-wrapper">
						<Menu />
					</ElScrollbar>
				</ElAside>
				<ElContainer direction="vertical" class="relative">
					<ElHeader class={headerClass}>
						<ToolLeft />
						<ToolRight />
					</ElHeader>
					<Tabs />
					<MainApp />
				</ElContainer>
			</>
		);
	};
	const LayoutBasic = () => {
		return (
			<div class="w-full">
				<div class="flex justify-between h-[var(--top-header-height)] !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{!unref(isMobile) ? <Logo class="!w-[var(--left-menu-max-width)]" /> : undefined}
					<ElHeader class={[unref(isMobile) ? '!w-full' : '!w-[calc(100%-var(--left-menu-max-width))]', headerClass]}>
						<ToolLeft />
						<ToolRight />
					</ElHeader>
				</div>
				<ElContainer class="relative !h-[calc(100%-var(--top-header-height))]">
					<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 !b-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
						{unref(isMobile) ? <Logo /> : undefined}
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
					<ElContainer direction="vertical">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</div>
		);
	};
	const LayoutHorizontal = () => {
		return (
			<div class="w-full">
				{unref(isMobile) ? (
					<ElAside class={[asideClass, unref(collapseWidth), 'p-0 !b-0 fixed top-0 bottom-0 left-0 z-9999']}>
						<Logo />
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
				) : undefined}
				<ElHeader class="flex-between !h-[var(--top-header-height)] !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{unref(isMobile) ? (
						<CollapseIcon />
					) : (
						<>
							<Logo class="!w-[var(--left-menu-max-width)]" />
							<Menu class="flex-1 overflow-hidden" />
						</>
					)}
					<ToolRight class="!px-2" />
				</ElHeader>
				<ElContainer direction="vertical" class="relative !h-[calc(100%-var(--top-header-height))]">
					<Tabs />
					<MainApp />
				</ElContainer>
			</div>
		);
	};
	const LayoutLattice = () => {
		return (
			<>
				{unref(isMobile) ? (
					<div class={[asideClass, unref(collapseWidth), 'p-0 !b-0 fixed top-0 bottom-0 left-0 z-9999']}>
						<Logo />
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</div>
				) : undefined}
				{unref(isMobile) ? undefined : <VerticalMenu />}
				<ElContainer direction="vertical" class="relative ">
					<ElHeader class="flex-between !h-[var(--top-header-height)] !px-2 border-b-1 border-[var(--el-color-info-light-8)]">
						{unref(isMobile) ? <CollapseIcon /> : <BreadCrumb />}
						<ToolRight />
					</ElHeader>
					<ElContainer direction="vertical" class="relative !h-[calc(100%-var(--top-header-height))]">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</>
		);
	};
	const LayoutMixins = () => {
		return (
			<div class="w-full">
				<ElHeader class="flex-between !h-[var(--top-header-height)] !p-0 border-b-1 border-[var(--el-color-info-light-8)]">
					{unref(isMobile) ? (
						<CollapseIcon />
					) : (
						<div class="flex-center h-full w-full">
							<Logo class="!w-[var(--left-menu-max-width)]" />
							<HorizontalMenu />
						</div>
					)}
					<ToolRight class="!px-2" />
				</ElHeader>
				<ElContainer class="relative !h-[calc(100%-var(--top-header-height))]">
					<ElAside class={[asideClass, unref(collapseWidth), { 'p-0 !b-0 fixed top-0 bottom-0 left-0 z-9999': unref(isMobile) }]}>
						{unref(isMobile) ? <Logo /> : undefined}
						<ElScrollbar wrap-class="scrollbar-wrapper">
							<Menu />
						</ElScrollbar>
					</ElAside>
					<ElContainer direction="vertical" class="relative">
						<Tabs />
						<MainApp />
					</ElContainer>
				</ElContainer>
			</div>
		);
	};

	return {
		LayoutVertical,
		LayoutBasic,
		LayoutHorizontal,
		LayoutLattice,
		LayoutMixins
	};
};
