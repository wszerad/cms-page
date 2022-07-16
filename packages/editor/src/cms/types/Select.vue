<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
	modelValue: string,
	options: { label: string, value: any}[]
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
	<select v-model="model">
		<option
			v-for="option in options"
			:value="option.value"
		>
			{{ option.label }}
		</option>
	</select>
</template>

<style lang="scss">

</style>

