<script setup lang="ts">
import Row from '@/components/form/Row.vue'
import { SomeJSONSchema } from 'ajv/lib/types/json-schema'
import { computed, defineProps } from 'vue'
import Text from '@/cms/types/Text.vue'
import Number from '@/cms/types/Number.vue'
import Bool from '@/cms/types/Bool.vue'

const props = defineProps<{
	schema: SomeJSONSchema,
	name: string,
	modelValue: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const component = computed(() => {
	return ({
		'boolean': Bool,
		'string': Text,
		'number': Number,
		'integer': Number,
		'array': Array,
	})[props.schema?.type as string]
})

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
	<Row :label="name">
		<component
			v-if="component"
			:is="component"
			v-model="model"
			v-bind="$attrs"
		/>
	</Row>
</template>

<style lang="scss">

</style>
