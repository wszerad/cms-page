import { useContent } from '@/composables/useContent'
import { Page, PagesTreeItem } from '@/types'
import { computed, ref } from 'vue'

const page = ref<Page | null>()

export const usePage = () => {
	const { content } = useContent()

	const allPages = computed(() => content.value?.pages || [])

	const flatPage = (page: Page, ancestors: Page[] = []): PagesTreeItem[] => {
		return [
			{
				id: page.id,
				page,
				ancestors
			},
			...page.pages.flatMap(item => flatPage(item, [...ancestors, page]))
		]
	}

	const allPagesFlat = computed<PagesTreeItem[]>(() => {
		return allPages.value.flatMap(item => flatPage(item))
	})

	const selectPage = (selectedPage: Page | null) => {
		page.value = selectedPage ? Page.create(selectedPage) : null
	}

	const savePage = (page: Page) => {
		const ctx = content.value
		content.value = {
			...ctx,
			pages: ctx.pages.map(item => {
				if (page.id !== item.id) return item
				return page
			})
		}
	}

	const addPage = () => {
		const ctx = content.value
		const page = Page.create({
			title: 'New page',
			path: 'page'
		})
		selectPage(page)
		content.value = {
			...ctx,
			pages: [
				...ctx.pages,
				page
			]
		}
	}

	return {
		allPages,
		allPagesFlat,
		page,
		selectPage,
		savePage,
		addPage
	}
}
