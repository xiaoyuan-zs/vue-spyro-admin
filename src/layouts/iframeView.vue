<script lang="ts" setup>
	import { useRoute } from 'vue-router';
	import { unref } from 'vue';

	defineOptions({
		name: 'IFrameView'
	});
	const currentRoute = useRoute();
	const loading = ref(true);
	const iframeSrc = ref('');
	const iframeRef = ref<HTMLElement | null>(null);

	if (unref(currentRoute.meta)?.iframeSrc) {
		iframeSrc.value = unref(currentRoute.meta)?.iframeSrc as string;
	}

	// 初始化完成后关闭 loading
	const init = () => {
		nextTick(() => {
			const iframe = unref(iframeRef);
			if (!iframe) return;
			const _frame = iframe as any;
			if (_frame.attachEvent) {
				_frame.attachEvent('onload', () => {
					loading.value = false;
				});
			} else {
				_frame.onload = () => {
					loading.value = false;
				};
			}
		});
	};

	onMounted(() => init());
</script>

<template>
	<div v-loading="loading" class="frame" element-loading-text="加载中...">
		<iframe ref="iframeRef" :src="iframeSrc" class="frame-iframe" />
	</div>
</template>
<style lang="scss" scoped>
	.frame {
		position: absolute;
		inset: 0;
		border-top: 1px solid var(--el-color-info-light-8);

		&-iframe {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			overflow: hidden;
			border: 0;
		}
	}
</style>
