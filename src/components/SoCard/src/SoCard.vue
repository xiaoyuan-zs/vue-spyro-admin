<script setup lang="tsx">
	const props = withDefaults(
		defineProps<{
			title?: string;
			shadow?: 'always' | 'hover' | 'never';
		}>(),
		{
			shadow: 'hover'
		}
	);

	const attrs = useAttrs();
	const slots = useSlots();

	const renderSlot: Record<string, any> = {
		header: () => slots['header'] && slots['header'](),
		default: () => {
			return (
				<>
					{props.title ? (
						<h2 class="mb-4 underline underline-offset-8 decoration-2 hover:decoration-primary duration-200 flex items-center">
							<span>{props.title}</span>
						</h2>
					) : undefined}
					{slots['default'] ? slots['default']() : undefined}
				</>
			);
		},
		footer: () => slots['footer'] && slots['footer']()
	};

	const renderSoCard = defineComponent({
		name: 'SoCard',
		setup() {
			return () => (
				<el-card shadow={props.shadow} {...attrs}>
					{Object.keys(slots).map((key) => renderSlot[key]())}
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
