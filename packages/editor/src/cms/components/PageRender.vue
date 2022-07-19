<script setup lang="ts">
import { Part } from '@/types'
import ComponentRender from '@/cms/components/ComponentRender.vue'

defineProps<{
	parts?: Part[]
}>()
</script>

<template>
  <div class="PageRender">
    <ComponentRender
        v-for="part in parts"
        v-bind="part"
    />
  </div>
</template>
