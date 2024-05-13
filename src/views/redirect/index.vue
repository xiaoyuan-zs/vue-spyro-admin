<script setup lang="ts" name="Redirect">
	import { useRouter } from 'vue-router';

	const { replace } = useRouter();
	const { params, query } = route;
	const { path } = params;
	replace({ path: '/' + path, query });
</script>

<template>
	<div></div>
</template>
