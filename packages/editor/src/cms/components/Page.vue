<script setup lang="ts">

</script>

<template>
  <div class="Page">
    <Render
        v-for="part in parts"
        v-bind="part"
    />
  </div>
</template>
