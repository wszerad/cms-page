<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
	modelValue: string
}>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const model = computed({
	get() {
		return props.modelValue
	},
	set(value: string) {
		emit('update:modelValue', value)
	}
})

</script>

<template>
	<input type="text" v-model="model">
</template>

<style lang="scss">

</style>
