<template>
  <img :src="src" class="Image" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Image',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
})
</script>
