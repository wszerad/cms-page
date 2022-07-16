<script setup lang="ts">
import Input from '@/cms/types/Input.vue'
import Select from '@/cms/types/Select.vue'
import Text from '@/cms/types/Text.vue'
import Group from '@/components/form/Group.vue'
import Row from '@/components/form/Row.vue'
import { useComponent } from '@/composables/useComponent'
import { useMocks } from '@/composables/useMocks'
import { computed, ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const { manifest } = useMocks()
const { component, saveComponent } = useComponent()
const componentImport = ref('')

const options = Object.keys(manifest).map(key => ({ label: key, value: key }))

const componentProps = computed(() => {
	return component.value ? manifest[component.value.component].schema : {}
})

const onImport = () => {
	console.log('import', JSON.parse(componentImport.value))
}

onBeforeRouteLeave(saveComponent)
onBeforeRouteUpdate(saveComponent)
</script>

<template>
	<div class="ComponentView" v-if="component">
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
