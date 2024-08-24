<script setup lang="ts">
	import { useIcon } from '@/hooks';
	const IconNotFound = useIcon({ name: 'spyro:403', size: 600 });
</script>

<template>
	<div>
		<component :is="IconNotFound" />
	</div>
</template>

<style lang="scss" scoped></style>
