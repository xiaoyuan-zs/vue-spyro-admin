<script setup lang="ts">
	// 若引入报类型错误，请在tsconfig.ts 中 compilerOptions 下，添加 "types" : ["unplugin-icons/types/vue"]
	// 获取声明 declare module '~icons/*'
	import SvgSpinners3DotsBounce from '~icons/svg-spinners/3-dots-bounce';
	import LineMdMenuFoldLeft from '~icons/line-md/menu-fold-left';
</script>

<template>
	<!-- 由于图标是按需引入，在按钮和动态组件上使用需要按需导入对应图标组件 -->
	<IconAntDesignCodeFilled />
	<!-- 直接使用本地自定义图标 -->
	<IconVxBell />
	<!-- 按钮使用 -->
	<el-button :icon="SvgSpinners3DotsBounce"></el-button>
	<!-- unocss 使用 -->
	<div class="i-line-md:close-circle text-3xl" />
	<div>
		<!-- 动态组件使用 -->
		<component :is="LineMdMenuFoldLeft" />
		<!-- 自定义组件使用 -->
		<Icon name="line-md:lightbulb-off" />
	</div>
</template>
