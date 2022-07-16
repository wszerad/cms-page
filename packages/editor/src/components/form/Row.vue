<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
	label: string
}>()
</script>

<template>
	<div class="Row">
		<label>
			<span class="pr-4">
				{{ label }}
			</span>
			<slot />
		</label>
	</div>
</template>

<style lang="scss">
.Row {
		@apply lg:inline-block lg:w-1/2;
}
@apply
</style>
