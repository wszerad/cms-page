<template>
  <Page :parts="parts" />
</template>

<script setup lang="ts">
import Page from '@/cms/components/Page.vue'
import manifest from '@/manifest'

const { parts } = manifest
</script>
