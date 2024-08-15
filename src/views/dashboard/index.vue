<script setup lang="ts">
	defineOptions({
		name: 'Dashboard'
	});

	const screen = ref<HTMLDivElement>();

	const initSize = () => {
		if (screen.value) {
			screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
			window.addEventListener('resize', resize);
		}
	};

	const getScale = (w = 1920, h = 1080) => {
		const ww = window.innerWidth / w;
		const wh = window.innerHeight / h;
		return ww < wh ? ww : wh;
	};

	const resize = () => {
		if (screen.value) {
			screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		}
	};

	onMounted(() => {
		initSize();
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', resize);
	});
</script>

<template>
	<div class="w-full h-full overflow-hidden">
		<div ref="screen" class="fixed w-480 h-270 left-2/4 top-2/4 transform-origin-lt">
			<div class="w-full h-full">开发中</div>
		</div>
	</div>
</template>
