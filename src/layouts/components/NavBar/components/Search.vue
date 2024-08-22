<script lang="ts" setup></script>

<template>
	<el-tooltip effect="dark" :content="$t('platform.search')" placement="bottom">
		<div class="flex-center p-3 hover:bg-[var(--el-fill-color)] transition rounded-lg cursor-pointer">
			<Icon name="spyro:search" :size="20" />
		</div>
	</el-tooltip>
</template>
