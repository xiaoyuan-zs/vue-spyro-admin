<script lang="tsx">
	import SubMenuItem from './SubMenu.vue';
	import { findRouteByPath, getParentPaths } from '@/router/helpers/utils';
	import { usePermissionStore, useLayoutStore, useAppStore } from '@/store';
	import { RouteRecordRaw, useRoute } from 'vue-router';
	import { unref } from 'vue';
	import { ElMenu } from 'element-plus';

	export default defineComponent({
		name: 'AsideMenu',
		setup() {
			const appStore = useAppStore();
			const route = useRoute();
			const layoutStore = useLayoutStore();
			const permissionStore = usePermissionStore();

			const layout = computed(() => layoutStore.layout);
			const isCollapse = computed(() => appStore.isCollapse);
			const isMobile = computed(() => appStore.isMobile);
			// 横向布局菜单模式（移动端情况下垂直）
			const menuMode = computed(() => (unref(layout) === 'horizontal' && !unref(isMobile) ? 'horizontal' : 'vertical'));
			// 以下布局不收缩
			const menuCollapse = computed(() => {
				const layoutType: LayoutConfig[] = ['horizontal', 'lattice', 'mixins'];
				if (layoutType.includes(unref(layout)!)) {
					return false;
				}
				return unref(isCollapse);
			});
			// 是否只保持一个子菜单的展开
			const menuUnique = computed(() => layoutStore.menuUnique);
			// 全部菜单
			const wholeMenus = computed(() => permissionStore.wholeMenus);

			// 当前路由下的子菜单
			const subMenuData = ref<Array<RouteRecordRaw>>([]);
			// 菜单模式
			const menuList = computed(() =>
				['mixins', 'lattice'].includes(layoutStore.layout!) && !unref(isMobile) ? subMenuData.value : wholeMenus.value
			);

			const activeMenu = computed(() => {
				const { path, meta } = route;
				if (meta.activeMenu) return meta.activeMenu;
				return path;
			});

			// 混合布局、栅格布局获取子菜单
			function getSubMenuData() {
				let path = '';
				path = activeMenu.value;
				subMenuData.value = [];
				// path的上级路由组成的数组
				const parentPathArr = getParentPaths(path, wholeMenus.value);

				// 当前路由的父级路由信息
				const parentRoute = findRouteByPath(parentPathArr[0] || path, wholeMenus.value);
				if (!parentRoute?.children) return;
				subMenuData.value = parentRoute?.children;
			}

			// 监听路由的变化，过滤出当前路由的子路由集合(作用于栅格和混合布局)
			watch(
				() => [route.path, permissionStore.wholeMenus],
				() => {
					if (route.path.includes('/redirect')) return;
					getSubMenuData();
				}
			);

			onMounted(() => {
				getSubMenuData();
			});

			return () => {
				return (
					<div class={`el-menu-layout el-menu-layout__${unref(menuMode)}`}>
						<ElMenu
							router
							mode={unref(menuMode)}
							unique-opened={unref(menuUnique)}
							collapse={unref(menuCollapse)}
							collapse-transition={false}
							default-active={unref(activeMenu)}>
							{{
								default: () =>
									menuList.value.map((menu, index) => (
										<SubMenuItem key={menu.path + index} item={menu as MenuOption} base-path={menu.path} />
									))
							}}
						</ElMenu>
					</div>
				);
			};
		}
	});
</script>
