<template>
	<teleport to="body" :disabled="appendToBody">
		<div v-if="open" ref="rightMenu" :style="{ top: `${menuTop}px`, left: `${menuLeft}px` }" class="right-menu">
			<ul class="menu-list">
				<li class="menu-item" v-for="(menu, index) in menuList" :key="index">
					<el-icon class="menu-item-icon">
						<component :is="menu.icon" />
					</el-icon>
					<span class="menu-item-label">{{ menu.label }}</span>
					<span class="menu-item-tips">{{ menu.tips }}</span>
					<el-icon class="menu-item-arrow"><ArrowRight /></el-icon>
				</li>
			</ul>
		</div>
	</teleport>
</template>

<script lang="ts" name="RightMenu">
	import { PropType } from 'vue';
	export default defineComponent({
		name: 'RightMenu',
		props: {
			el: {
				type: HTMLElement,
				default: null
			},
			appendToBody: {
				type: Boolean,
				default: true
			},
			menuList: {
				type: Array as PropType<RightMenuOptions[]>,
				default: () => []
			}
		},
		setup() {
			let open = ref<boolean>(false);
			let menuTop = ref<number>(0);
			let menuLeft = ref<number>(0);
			const rightMenu = ref<HTMLElement | null>(null);

			const show = (x: number, y: number) => {
				open.value = true;
				menuTop.value = y;
				menuLeft.value = x;
			};
			const listenerFunc = (e: MouseEvent) => {
				if (rightMenu.value && !rightMenu.value.contains(e.currentTarget as HTMLElement)) {
					open.value = false;
					document.oncontextmenu = null;
				}
			};

			onUnmounted(() => {
				document.removeEventListener('mousedown', listenerFunc);
			});
			return {
				open,
				menuLeft,
				menuTop,
				show
			};
		}
	});
</script>

<style scoped lang="scss">
	.right-menu {
		position: fixed;
		z-index: 9999;
		width: fit-content;
		min-width: 200px;
		height: fit-content;
		padding: 8px 6px;
		font-size: 12px;
		background-color: #fff;
		border-radius: 6px;
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

		.menu-list {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			justify-items: center;
		}

		.menu-item {
			display: flex;
			align-items: center;
			height: 30px;
			padding: 0 10px;
			border-radius: 4px;
			transition: all 0.1s ease-in-out;

			&-icon {
				margin-right: 5px;
			}

			&-label {
				flex: 1;
				width: 100%;
				margin-right: 5px;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			&-arrow {
				margin-left: 5px;
			}
		}

		.menu-item:hover {
			color: #5e6370;
			cursor: pointer;
			background: rgb(31 54 128 / 10%);
		}
	}
</style>
