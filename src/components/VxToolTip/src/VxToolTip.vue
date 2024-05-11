<script lang="tsx" name="VxTitleFlow">
	export default defineComponent({
		props: {
			textColor: {
				type: String
			},
			content: [String, Number],
			lineClamp: String,
			popoverWidth: Number
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
					<div>
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
					</div>
				</>
			);
		}
	});
</script>
