import { useContent } from '@/composables/useContent'
import { usePage } from '@/composables/usePage'
import { Part } from '@/types'
import { computed, ref } from 'vue'

const component = ref<Part>()
const originalRef = ref<Part>()

export const useComponent = () => {
	const { page } = usePage()
	const { content } = useContent()
	const allComponents = computed(() => page.value?.parts || [])

	const saveComponent = () => {
		const ctx = content.value

		if (!ctx || !component.value || JSON.stringify(originalRef.value === component.value)) {
			return
		}

		content.value = {
			...ctx,
			pages: ctx.pages.map(item => {
				if (page.value!.id !== item.id) {
					return item
				}

				return {
					...item,
					parts: item.parts.map(item => {
						if (item.id !== component.value!.id) {
							return item
						}

						return component.value!
					})
				}
			})
		}
	}

	const selectComponent = (selectedComponent?: Part) => {
		originalRef.value = selectedComponent
		component.value = selectedComponent ? Part.create(selectedComponent) : undefined
	}

	return {
		saveComponent,
		selectComponent,
		allComponents,
		component
	}
}
