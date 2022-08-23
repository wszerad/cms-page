<script setup lang="ts">
import ComponentRender from '@/cms/components/ComponentRender.vue'
import { onServerPrefetch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const parts = ref([])

onServerPrefetch(async () => {
	const path = `http://localhost:3001/public/data/${route.fullPath.replaceAll('/', '_')}.json`
	const page = await fetch(path)
		.then(d => d.json())
		.catch((e) => {
			console.error(e)
			return {}
		})

	parts.value = page?.parts || []
})
</script>

<template>
  <div class="PageRender">
    <ComponentRender
        v-for="part in parts"
        v-bind="part"
    />
  </div>
</template>
