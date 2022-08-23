<script setup lang="ts">
import { useModal } from '@/composables/useModal'

const { modal } = useModal()
</script>

<template>
<div
	v-if="modal"
	class="Modal absolute insert-0"
>
	<component :is="modal" />
</div>
</template>

<style lang="scss">

</style>
