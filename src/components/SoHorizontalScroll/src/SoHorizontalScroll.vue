<script setup lang="ts">
	import { useElementSize } from '@vueuse/core';
	type hType = {
		width: number;
		height: number;
	};

	const h = reactive<hType>({
		width: 0,
		height: 0
	});
	const horizontalRef = ref<HTMLElement>();
	const { width, height } = useElementSize(horizontalRef);
	// 后面优化为自定义指令
	watchEffect(() => {
		h.width = width.value;
		h.height = height.value;
	});
</script>

<template>
	<div ref="horizontalRef" class="h-full w-full mask-image-left">
		<div class="scroll">
			<div class="content">
				<slot />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.scroll {
		position: relative;

		/* 因为宽高是有单位的，所以利用 calc 乘以 1px 给宽高加上单位 */
		width: calc(v-bind('h.height') * 1px);
		height: calc(v-bind('h.width') * 1px);
		overflow: hidden;
		overflow-y: auto;

		// 旋转之后位于容器正上方，需要往Y轴向下移动高度的距离回到原位
		transform: translateY(calc(v-bind('h.height') * 1px)) rotate(-90deg);
		transform-origin: 0 0;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.content {
		position: absolute;

		// 将旋转后的位置向左移动回到原位
		left: calc(v-bind('h.height') * 1px);
		height: calc(v-bind('h.height') * 1px);
		transform: rotate(90deg);
		transform-origin: 0 0;
	}
</style>
