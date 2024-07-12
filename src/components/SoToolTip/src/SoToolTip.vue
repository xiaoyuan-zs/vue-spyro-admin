<script lang="tsx">
	import { propTypes } from '@/utils/propTypes';
	export default defineComponent({
		name: 'SoToolTip',
		props: {
			textColor: propTypes.string.def('text-inherit'),
			content: [String, Number],
			lineClamp: propTypes.string.def('line-clamp-2'),
			popoverWidth: propTypes.number.def(230)
		},
		setup(props) {
			const { content, lineClamp, popoverWidth, textColor } = toRefs(props);
			let tooltipContentRef = ref<HTMLElement | null>(null);
			let show = ref(false);

			onMounted(() => {
				nextTick(() => {
					// 计算元素高度
					const { offsetHeight, scrollHeight } = tooltipContentRef.value!;
					show.value = scrollHeight - offsetHeight > 0;
				});
			});

			return () => (
				<>
					{show.value ? (
						<el-popover placement="top" width={popoverWidth.value} trigger="hover">
							{{
								default: () => <span>{content.value}</span>,
								reference: () => <span class={`${lineClamp.value} ${textColor.value} leading-23px cursor-pointer`}>{content.value}</span>
							}}
						</el-popover>
					) : (
						<span ref={tooltipContentRef} class={`${lineClamp.value} leading-23px`}>
							{content.value}
						</span>
					)}
				</>
			);
		}
	});
</script>
