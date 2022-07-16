import { usePage } from '@/composables/usePage'
import { Part } from '@/types'
import { computed, ref } from 'vue'

const component = ref<Part>()

export const useComponent = () => {
	const { page, savePage } = usePage()
	const allComponents = computed(() => page.value?.parts || [])

	const saveComponent = (component: Part) => {
		savePage({
			...page.value!,
			parts: page.value?.parts?.map(item => {
				if (item.id !== component.id) return item
				return component
			}) || []
		})
	}

	const selectComponent = (selectedComponent: Part | null) => {
		component.value = selectedComponent ? Part.create(selectedComponent) : undefined
	}

	return {
		saveComponent,
		selectComponent,
		allComponents,
		component
	}
}
