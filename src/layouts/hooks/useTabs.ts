import { useEventListener } from '@vueuse/core';
import { useTabsStore } from '@/store';
import { useRoute } from 'vue-router';
import type { ContextMenuType } from '@/store/types';

export const useTabs = () => {
	let menuClientX = ref<number>(0);
	let menuClientY = ref<number>(0);
	// 是否显示右键菜单
	let showContextMenu = ref<boolean>(false);
	let clickTabMenu = ref<string>('');

	const tabStore = useTabsStore();
	const route = useRoute();

	// 菜单列表
	const contextMenuOptions: ContextMenuType[] = [
		{
			icon: 'ep:refresh',
			label: '刷新页面',
			prop: 'refresh',
			show: true,
			disabled: false
		},
		{
			icon: 'ep:close',
			label: '关闭当前',
			prop: 'closeCurrent',
			show: true,
			disabled: false
		},
		{
			icon: 'ep:arrow-left',
			label: '关闭左侧',
			prop: 'closeLeft',
			show: true,
			disabled: false
		},
		{
			icon: 'ep:arrow-right',
			label: '关闭右侧',
			prop: 'closeRight',
			show: true,
			disabled: false
		},
		{
			icon: 'ep:switch',
			label: '关闭其他',
			prop: 'closeOther',
			show: true,
			disabled: false
		},
		{
			icon: 'ep:remove',
			label: '关闭所有',
			prop: 'closeAll',
			show: true,
			disabled: false
		}
	];

	/**
	 *
	 * @param path 过滤tab显示菜单
	 * @param isFixed
	 */
	const filterTabMenu = (path: string, isFixed?: boolean) => {
		// 每次过滤的时候重置
		contextMenuOptions.map((item) => {
			item.disabled = false;
			item.show = true;
		});
		const clickIndex = tabStore.tabsMenuList.findIndex((el) => el.path === path);
		// 不是当前路由去除当前刷新
		if (route.fullPath !== path) {
			contextMenuOptions[0].show = false;
		}
		if (clickIndex === 0) {
			contextMenuOptions[2].show = false;
			contextMenuOptions[2].disabled = true;
			contextMenuOptions[4].disabled = true;
			contextMenuOptions[5].disabled = true;
		}
		// 点击的等于最后一个，去除关闭右侧
		if (clickIndex === tabStore.tabsMenuList.length - 1) {
			contextMenuOptions[3].show = false;
			contextMenuOptions[3].disabled = true;
		}
		// 是第一个则去除关闭当前和关闭左侧
		if (isFixed) {
			contextMenuOptions[1].show = false;
			contextMenuOptions[2].show = false;
			contextMenuOptions[1].disabled = true;
			contextMenuOptions[2].disabled = true;
		}
		clickTabMenu.value = path;
	};

	const menuStyle = computed(() => {
		return {
			left: menuClientX.value + 'px',
			top: menuClientY.value + 'px'
		};
	});

	// 监听showContextMenu， 实现鼠标左键点击关闭菜单
	watch(
		() => showContextMenu.value,
		() => {
			useEventListener(document, 'click', () => {
				showContextMenu.value = false;
			});
		}
	);

	return {
		contextMenuOptions,
		showContextMenu,
		clickTabMenu,
		menuClientX,
		menuClientY,
		menuStyle,
		filterTabMenu
	};
};
