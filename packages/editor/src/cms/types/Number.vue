<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
	modelValue: number
}>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void
}>()

const model = computed({
	get() {
		return props.modelValue
	},
	set(value: number) {
		emit('update:modelValue', value)
	}
})

</script>

<template>
	<input
		type="number"
		v-model="model"
		v-bind="$attrs"
	>
</template>
