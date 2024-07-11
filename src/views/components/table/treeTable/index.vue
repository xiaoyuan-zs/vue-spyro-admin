<script setup lang="ts">
	import { buildHierarchyTree } from '@spyro/utils';
	import { getTrees } from '@/api/tree';
	import { TreeNode } from '@/api/tree/type';

	getTrees().then((res) => {
		console.log(655, buildHierarchyTree(res.data));
	});
</script>
<template>
	<div>treeTable</div>
</template>
