import { useContent } from '@/composables/useContent'
import { Page, PagesTreeItem } from '@/types'
import { computed, ref } from 'vue'

const page = ref<Page>()
let originalRef = ref<Page>()

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

	const selectPage = (selectedPage?: Page) => {
		originalRef.value = selectedPage
		page.value = selectedPage
			? Page.create(selectedPage)
			: undefined
	}

	const savePage = () => {
		const ctx = content.value

		if (!ctx || !page.value || JSON.stringify(originalRef.value) === JSON.stringify(page.value)) {
			return
		}

		content.value = {
			...ctx,
			pages: ctx.pages.map(item => {
				if (page.value!.id !== item.id) {
					return item
				}

				return {
					...page.value!,
					updated: new Date(),
					version: page.value!.version + 1
				}
			})
		}
	}

	const addPage = () => {
		const ctx = content.value
		const page = Page.create({
			title: 'New page',
			path: 'page',
		})
		selectPage(page)

		if (!ctx) {
			return
		}

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
