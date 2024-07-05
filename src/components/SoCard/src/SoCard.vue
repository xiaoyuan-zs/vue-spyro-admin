<script setup lang="tsx">
	const props = withDefaults(
		defineProps<{
			title?: string;
			shadow?: 'always' | 'hover' | 'never';
		}>(),
		{
			shadow: 'never'
		}
	);

	const attrs = useAttrs();
	const slots = useSlots();

	const renderSoCard = defineComponent({
		name: 'SoCard',
		setup() {
			return () => (
				<el-card shadow={props.shadow} {...attrs}>
					{{
						header: () => {
							if (slots['header']) return slots['header']();
						},
						default: () => {
							if (props.title)
								return (
									<>
										<h2 class="mb-4 underline underline-offset-8 decoration-2 hover:decoration-sky-500 duration-200 flex items-center">
											<span>{props.title}</span>
										</h2>
										{slots['default'] ? slots['default']() : undefined}
									</>
								);
						},
						footer: () => {
							if (slots['footer']) return slots['footer']();
						}
					}}
				</el-card>
			);
		}
	});
</script>

<template>
	<renderSoCard />
</template>

<style lang="scss" scoped>
	.el-card {
		@apply flex-col;
		:deep(.el-card__body) {
			@apply flex-col flex-1 min-h-0;
		}
	}
</style>
