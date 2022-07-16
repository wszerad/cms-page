<script setup lang="ts">
import Input from '@/cms/types/Input.vue'
import { SomeJSONSchema } from 'ajv/lib/types/json-schema'
import { defineProps } from 'vue'

const props = defineProps<{
	schema: SomeJSONSchema,
	modelValue: Record<string, any>
}>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: Record<string, any>): void
}>()

const update = (key: string, value: any) => {
	emit('update:modelValue', Object.assign({}, value, { [key]: value }))
}

</script>

<template>
	<div>
		<Input
			v-for="(item, key) in schema.properties"
			:schema="item"
			:modelValue="modelValue[key]"
			@update:modelValue="update(key, $event)"
		/>
	</div>
</template>

<style lang="scss">

</style>
