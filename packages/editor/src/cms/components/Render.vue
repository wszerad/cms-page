<script setup lang="ts">
import { Components } from '@/manifest'

defineProps<{
	component: string,
	props?: object,
	slots?: object
}>()
</script>

<template>
  <component :is="Components[component]" v-bind="props">
    <template v-for="(slot, key) in slots" v-slot:[key]>
      <Render v-bind="slot"/>
    </template>
  </component>
</template>
