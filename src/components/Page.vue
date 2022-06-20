<template>
  <div class="Page">
    <Render
        v-for="part in parts"
        v-bind="part"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Part } from '../types'
import Render from './Render.vue'

export default defineComponent({
  name: 'Page',
  components: { Render },
  props: {
    parts: {
      type: Array as PropType<Part[]>,
      default: () => []
    }
  }
})
</script>
