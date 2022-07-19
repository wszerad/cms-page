<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
	modelValue: boolean,
	title: string
}>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
}>()

const model = computed({
	get() {
		return props.modelValue
	},
	set(value: boolean) {
		emit('update:modelValue', value)
	}
})

</script>

<template>
	<label>
		{{ title }}
		<input
			type="checkbox"
			v-model="model"
			v-bind="$attrs"
		>
	</label>

</template>
