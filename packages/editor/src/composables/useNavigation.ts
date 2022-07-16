import { usePage } from '@/composables/usePage'
import { Page, Part } from '@/types'

export const useNavigation = () => {
	const { allPagesFlat } = usePage()

	const homeLink = () => {
		return '/'
	}

	const pageLink = (page: Page) => {
		return `/page/${page.id}`
	}

	const componentLink = (component: Part) => {
		let page: Page
		allPagesFlat.value.some(item => {
			return item.page.parts.some(part => {
				if (part.id === component.id) {
					page = item.page
					return true
				}
			})
		})
		return `/page/${page!.id}/component/${component.id}`
	}

	return {
		homeLink,
		pageLink,
		componentLink
	}
}
