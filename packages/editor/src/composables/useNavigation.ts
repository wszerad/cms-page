import { Page, Part } from '@/types'

export const useNavigation = () => {
	const homeLink = () => {
		return '/'
	}

	const pageLink = (page: Page) => {
		return `/page/${page.id}`
	}

	return {
		homeLink,
		pageLink
	}
}
