<script lang="tsx">
	import { ElButton } from 'element-plus';
	import { useIcon } from '@/hooks/modules/useIcon';
	import { ColumnProps } from '@/components/SoTable';
	import { propTypes } from '@/utils/propTypes';
	export default defineComponent({
		name: 'SoTableTool',
		props: {
			showSearch: propTypes.bool.def(true),
			columnList: {
				type: Array as PropType<ColumnProps[]>,
				default: () => []
			}
		},
		emits: ['update:show-search', 'refresh'],
		setup(props, { emit }) {
			const Setting = useIcon({ name: 'ep:setting', size: 12 });
			const Refresh = useIcon({ name: 'ep:refresh', size: 12 });
			const Search = useIcon({ name: 'ep:search', size: 12 });

			// 实现 showSearch 的 v-model
			const showSearch = computed({
				get: () => props.showSearch,
				set: (value) => emit('update:show-search', value)
			});

			// 表格右侧工具栏
			const RightTool = () => {
				return (
					<div class="flex-center">
						<ElButton size="small" circle icon={Search} onClick={() => (showSearch.value = !showSearch.value)}></ElButton>
						<ElButton size="small" circle icon={Refresh} onClick={() => emit('refresh')}></ElButton>
						<ElButton size="small" circle icon={Setting}></ElButton>
					</div>
				);
			};

			// 列设置
			const columnSet = () => {};

			return () => (
				<div class="relative flex flex-justify-end">
					<RightTool />
				</div>
			);
		}
	});
</script>
