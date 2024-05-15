<!-- <script setup lang="ts"></script>

<template>
	<RouterView />
</template> -->

<script setup lang="ts">
	// 未使用自动导入Components 插件，需要手动导入
	// 若引入报类型错误，请在tsconfig.ts 中 compilerOptions 下，添加 "types" : ["unplugin-icons/types/vue"]
	// 获取声明 declare module '~icons/*'
	import SvgSpinners3DotsBounce from '~icons/svg-spinners/3-dots-bounce';
	import { useIcon } from './hooks/modules/useIcon';

	// 通过 useIcon 获取图标组件
	const Logo = useIcon({ name: 'vx:logo' });
</script>

<template>
	<!-- 由于图标是按需引入，在按钮和动态组件上使用需要按需导入对应图标组件 -->
	<IconAntDesignCodeFilled />
	<!-- 直接使用本地自定义图标 -->
	<IconVxBell />
	<!-- 按钮使用 -->
	<el-button :icon="Logo"></el-button>
	<!-- unocss 使用 -->
	<div class="i-line-md:close-circle text-3xl" />
	<div>
		<!-- 动态组件使用 -->
		<component :is="Logo" />
		<!-- 动态组件使用 -->
		<component :is="SvgSpinners3DotsBounce" />
		<!-- 自定义组件使用iconify -->
		<Icon name="line-md:lightbulb-off" />
		<!-- 自定义组件使用本地svg图标 -->
		<Icon name="vx:logo" :size="30" color="var(--el-color-primary)" />
	</div>
</template>
