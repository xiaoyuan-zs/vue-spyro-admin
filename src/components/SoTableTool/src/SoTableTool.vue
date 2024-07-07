<script lang="tsx">
	import { ElButton } from 'element-plus';
	import { useIcon } from '@/hooks/modules/useIcon';
	import { ColumnProps } from '@/components/SoTable';
	export default defineComponent({
		name: 'SoTableTool',
		props: {
			columnList: {
				type: Array as PropType<ColumnProps[]>,
				default: () => []
			}
		},
		setup() {
			const Setting = useIcon({ name: 'ep:setting' });
			const Refresh = useIcon({ name: 'ep:refresh' });
			const Search = useIcon({ name: 'ep:search' });

			const RightTool = () => {
				return (
					<div>
						<ElButton circle icon={Search}></ElButton>
						<ElButton circle icon={Refresh}></ElButton>
						<ElButton circle icon={Setting}></ElButton>
					</div>
				);
			};

			return () => (
				<div class="mb-3 relative flex flex-justify-end">
					<RightTool />
				</div>
			);
		}
	});
</script>
