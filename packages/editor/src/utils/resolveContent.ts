import { Content, Page } from '@/types'

function nestedPages(pages?: Page[], parents: Page[] = []): string[] {
	if (!pages) {
		return []
	}

	const parent = parents.at(-1)

	return pages
		.filter(page => page.parent == parent?.id)
		.flatMap((item) => {
			return [
				[...parents, item].map(i => i.path).join(''),
				...nestedPages(pages, [...parents, item])
			]
		})
}

export const resolveContent = (content: Content) => {
	return nestedPages(content.pages)
}
