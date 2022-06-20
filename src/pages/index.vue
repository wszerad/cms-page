<template>
  <Page :parts="parts" />
</template>

<script lang="ts">
import Render from '../components/Render.vue'
import Page from '../components/Page.vue'
import manifest from '../manifest'

console.log(Page)

export default {
  components: {
    Render,
    Page
  },
  setup() {
    const { parts } = manifest

    return {
      parts
    }
  }
}
</script>
