<script lang="ts">
	import { h, defineComponent } from 'vue';
	import { ElIcon } from 'element-plus';
	import { Icon } from '@iconify/vue';

	export default defineComponent({
		name: 'Icon',
		props: {
			name: {
				type: String,
				required: true
			},
			size: {
				type: [String, Number],
				default: 16
			},
			color: {
				type: String,
				default: 'inherit'
			},
			inline: {
				type: Boolean,
				default: true
			}
		},
		setup(props) {
			return () =>
				h(
					ElIcon,
					{
						size: props.size || '16px',
						color: props.color
					},
					() =>
						h(Icon, {
							inline: props.inline,
							icon: props.name
						})
				);
		}
	});
</script>
