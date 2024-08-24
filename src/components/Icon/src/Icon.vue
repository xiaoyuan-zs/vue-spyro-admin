<script lang="tsx">
	import { defineComponent } from 'vue';
	import { ElIcon } from 'element-plus';
	import { propTypes } from '@/utils/propTypes';
	import { Icon } from '@iconify/vue';

	export default defineComponent({
		name: 'Icon',
		props: {
			name: {
				type: String,
				required: true
			},
			size: propTypes.number.def(14),
			color: propTypes.string.def('inherit'),
			inline: propTypes.bool.def(true)
		},

		setup(props) {
			if (!props.name) return () => {};
			// 是否是本地svg
			const isLocal = computed(() => props.name.startsWith('spyro:'));
			// 本地svg href
			const symbolId = computed(() => {
				return unref(isLocal) ? `#icon-${props.name.split('spyro:')[1]}` : props.name;
			});
			return () => (
				<ElIcon size={props.size} color={props.color}>
					{isLocal.value ? (
						<svg aria-hidden>
							<use xlinkHref={symbolId.value} fill="currentColor"></use>
						</svg>
					) : (
						<Icon icon={props.name} inline={props.inline}></Icon>
					)}
				</ElIcon>
			);
		}
	});
</script>
