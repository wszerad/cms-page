import { Content, Page } from '@/types'

function nestedPages(pages?: Page[], parent: string[] = []): string[] {
	if (!pages) {
		return []
	}

	return pages
		.flatMap((item) => {
			return [
				[...parent, item.path].join('/'),
				...nestedPages(item.pages, [...parent, item.path])
			]
		})
}

export const resolveContent = (content: Content) => {
	return nestedPages(content.pages)
}
