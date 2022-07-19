<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
	type?: 'button' | 'reset' | 'submit',
	pending?: boolean
}>()

</script>

<template>
  <button
      class="button"
      :type="type || 'button'"
  >
    <slot/>
  </button>
</template>

<style lang="scss">
.button {
	@apply flex items-center justify-center border border-black px-2;
}
</style>
