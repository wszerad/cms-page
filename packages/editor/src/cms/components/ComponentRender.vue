<script setup lang="ts">
import { ManifestKey } from '@/types'
import { inject } from 'vue'

const manifest = inject(ManifestKey)

defineProps<{
	component: string,
	props?: object,
	slots?: object
}>()
</script>

<template>
  <component
		v-if="manifest?.[component]"
		:is="manifest[component].component"
		v-bind="props"
	/>
</template>
