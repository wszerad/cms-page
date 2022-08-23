<script setup lang="ts">
import { PageRender } from '@cms/editor'
</script>

<template>
  <main>
    <RouterView v-slot="{ Component, route }">
			<PageRender :page="route" />
		</RouterView>
  </main>
</template>

<style>
main {
  padding: 4em 10em;
}
</style>
