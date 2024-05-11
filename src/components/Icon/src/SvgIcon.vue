<template>
	<svg aria-hidden="true" :style="styles">
		<use :xlink:href="prefix + name" :fill="color"></use>
	</svg>
</template>

<script setup lang="ts" name="SvgIcon">
	// aria-hidden 用来辅助无障碍访问的，表明这个svg图标对屏幕阅读器是不可见的
	const props = defineProps({
		//xlink:href属性值的前缀
		prefix: {
			type: String,
			default: '#icon-'
		},
		//svg矢量图的名字
		name: {
			type: String,
			require: true
		},
		//svg图标的颜色
		color: {
			type: String,
			default: ''
		},
		//svg宽度
		width: {
			type: [String, Number],
			default: 16
		},
		//svg高度
		height: {
			type: [String, Number],
			default: 16
		}
	});

	const styles = computed(() => {
		return {
			width: props.width + 'px',
			height: props.height + 'px'
		};
	});
</script>

<style scoped lang="scss"></style>
