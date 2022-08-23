<script setup lang="ts">
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import { useComponent } from '@/composables/useComponent'
import { usePage } from '@/composables/usePage'
import { Part } from '@/types'
import { computed } from 'vue'

const { page } = usePage()
const { allComponents, selectComponent } = useComponent()

const parts = computed<Part[]>({
	get() {
		return allComponents.value
	},
	set(components: Part[]) {
		page.value!.parts = components
	}
})

const onAddComponent = () => {
	selectComponent(Part.create({
		component: ''
	}))
}
</script>

<template>
	<div class="ComponentsList">
		<Button @click="onAddComponent">
			<Icon name="add" />
			Add Component
		</Button>
	</div>
</template>
