<template>
  <h5 class="Header">
    {{ title }}
  </h5>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

