<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
	title: string
}>()

</script>

<template>
	<div class="Group border-2 border-amber-100 rounded bg-amber-50">
		<header class="border-b-2 border-amber-100 px-4 py-2 font-bold">
			{{ title }}
		</header>
		<article class="p-4">
			<slot />
		</article>
	</div>
</template>

<style lang="scss">
.Group + .Group {
		@apply mt-4;
}
</style>
