<script lang="tsx">
	import { useIcon } from '@/hooks/modules/useIcon';
	import { ColumnProps } from '@/components/SoTable';
	import { propTypes } from '@/utils/propTypes';
	import { SortableEvent, vDraggable } from 'vue-draggable-plus';
	export default defineComponent({
		name: 'SoTableTool',
		props: {
			showSearch: propTypes.bool.def(true),
			columns: {
				type: Array as PropType<ColumnProps[]>,
				default: () => []
			}
		},
		emits: ['update:show-search', 'update:columns', 'refresh'],
		directives: {
			draggable: vDraggable
		},
		setup(props, { emit }) {
			const Setting = useIcon({ name: 'ep:setting', size: 12 });
			const Refresh = useIcon({ name: 'ep:refresh', size: 12 });
			const Search = useIcon({ name: 'ep:search', size: 12 });
			const Draggable = useIcon({ name: 'ri:draggable' });

			// 实现 showSearch 的 v-model
			const showSearch = computed({
				get: () => props.showSearch,
				set: (value) => emit('update:show-search', value)
			});

			const columns = computed({
				get: () => props.columns,
				set: (value) => emit('update:columns', value)
			});

			const onUpdate = (e: SortableEvent) => {
				const column = unref(columns).splice(e.oldIndex!, 1);
				unref(columns).splice(e.newIndex!, 0, column[0]);
			};

			return {
				showSearch,
				columns,
				Draggable,
				Search,
				Refresh,
				Setting,
				onUpdate
			};
		}
	});
</script>

<template>
	<div class="relative flex flex-justify-end">
		<el-button size="small" circle :icon="Search" @click="showSearch = !showSearch"></el-button>
		<el-button size="small" circle :icon="Refresh" @click="$emit('refresh')"></el-button>
		<el-dropdown trigger="click" popper-class="dropdown-menu" placement="bottom-end" :hide-on-click="false">
			<el-button size="small" class="ml-3" circle :icon="Setting"></el-button>
			<template #dropdown>
				<el-dropdown-menu
					v-draggable="[
						columns,
						{
							animation: 200,
							ghostClass: 'ghost',
							handle: '.handle',
							onUpdate
						}
					]">
					<el-dropdown-item v-for="item in columns" :key="item.prop || item.type">
						<Icon name="ri:draggable" class="handle cursor-move" />
						<el-checkbox v-model="item.visible" :label="item.label" size="small" />
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<style lang="scss" scoped>
	.ghost {
		background: #c8ebfb;
		opacity: 0.5;
	}
</style>
<style lang="scss">
	.dropdown-menu .el-dropdown-menu .el-dropdown-menu__item {
		@apply mx-2 rounded-md py-0 px-2;
	}
</style>
