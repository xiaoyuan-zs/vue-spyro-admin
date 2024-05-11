<script lang="ts">
	import { h, defineComponent, resolveComponent } from 'vue';
	import { ElIcon } from 'element-plus';
	import SvgIcon from './SvgIcon.vue';

	const VITE_EL_ICON_PREFIX = 'el-icon';
	const VITE_LOCAL_ICON_PREFIX = 'local-icon';

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
			}
		},
		setup(props) {
			// 渲染el-icon
			if (props.name.includes(VITE_EL_ICON_PREFIX)) {
				return () =>
					h(
						ElIcon,
						{
							size: props.size || '16px',
							color: props.color
						},
						() => h(resolveComponent(props.name.replace(`${VITE_EL_ICON_PREFIX}-`, '')))
					);
			}
			// 渲染本地icon
			if (props.name.includes(VITE_LOCAL_ICON_PREFIX)) {
				return () =>
					h(
						ElIcon,
						{
							size: props.size || '16px',
							color: props.color
						},
						() =>
							h(SvgIcon, {
								width: props.size,
								height: props.size,
								color: props.color,
								name: props.name.replace(`${VITE_LOCAL_ICON_PREFIX}-`, '')
							})
					);
			}
		}
	});
</script>
