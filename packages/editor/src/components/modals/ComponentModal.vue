<script setup lang="ts">
import Group from '@/components/form/Group.vue'
import Row from '@/components/form/Row.vue'
import Input from '@/components/inputs/Input.vue'
import Select from '@/components/inputs/Select.vue'
import Text from '@/components/inputs/Text.vue'
import { useComponent } from '@/composables/useComponent'
import { ManifestKey } from '@/types'
import { ref, computed, inject } from 'vue'

const { component } = useComponent()
const manifest = inject(ManifestKey, {})
const componentImport = ref('')

const options = Object.keys(manifest).map(key => ({ label: key, value: key }))

const componentProps = computed(() => {
	return component.value ? manifest[component.value.component].schema : {}
})

const onImport = () => {
	console.log('import', JSON.parse(componentImport.value))
}
</script>

<template>
	<div class="ComponentModal">
		<Group title="Component">
			<Row label="name">
				<Select
					v-model="component.component"
					:options="options"
				/>
			</Row>
			<Row label="import">
				<Text v-model="componentImport" @change="onImport" />
			</Row>
		</Group>
		<Group title="Props">
			<Input
				v-for="(prop, key) in componentProps"
				:name="key"
				:schema="prop"
				v-model="component.props[key]"
			/>
		</Group>
	</div>
</template>

