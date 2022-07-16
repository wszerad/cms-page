<script setup lang="ts">
import Input from '@/cms/types/Input.vue'
import { SomeJSONSchema } from 'ajv/lib/types/json-schema'
import { computed, defineProps } from 'vue'

const props = defineProps<{
	schema: SomeJSONSchema,
	modelValue: any[]
}>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: any[]): void
}>()

const model = computed({
	get() {
		return props.modelValue
	},
	set(value: any[]) {
		emit('update:modelValue', value)
	}
})

</script>

<template>
<table>
	<tbody>
	<tr v-for="(item, index) in model">
		<td>
			{{ index }}
		</td>
		<td>
			<Input
				:modelValue="item"
				@update:modelValue="item"
				:schema="schema.items"
			/>
		</td>
	</tr>
	</tbody>
</table>
</template>
