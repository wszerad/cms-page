import { usePage } from '@/composables/usePage'
import { Part } from '@/types'
import { ListItemLocation, ListManager } from '@/utils/ListManager'
import { computed, ref } from 'vue'

const component = ref<Part>()
let onSave = () => {}

export const useComponent = () => {
	const { page, updatePage } = usePage()
	const allComponents = computed(() => page.value?.parts || [])

	const saveComponent = () => onSave()

	const updateComponents = (components: Part[]) => {
		if (!page.value) {
			return
		}

		updatePage({
			...page.value,
			parts: components
		})
	}

	const selectComponent = (selectedComponent?: Part) => {
		if (!selectedComponent) {
			component.value = undefined
			onSave = () => {}
			return
		}

		const modifiedComponent = component.value = Part.create(selectedComponent)
		onSave = () => {
			const parts = new ListManager(allComponents.value).replace(modifiedComponent!)
			updateComponents(parts)
		}
	}

	const addComponent = (location: { pre?: string, post?: string }) => {
		const newComponent = component.value = Part.create({
			component: '',
		})

		onSave = () => {
			const parts = new ListManager(allComponents.value).move(newComponent, location)
			updateComponents(parts)
		}
	}

	const removerComponent = (component: Part) => {
		const parts = new ListManager(allComponents.value).remove(component)
		updateComponents(parts)
	}

	const moveComponent = (component: Part, location: ListItemLocation) => {
		const parts = new ListManager(allComponents.value).move(component, location)
		updateComponents(parts)
	}

	return {
		addComponent,
		saveComponent,
		removerComponent,
		moveComponent,
		selectComponent,
		allComponents,
		component
	}
}
