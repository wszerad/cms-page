<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <img :src="src" class="Image" />
</template>
