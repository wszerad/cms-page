import { useContent } from '@/composables/useContent'
import { Page } from '@/types'
import { ListItemLocation, ListManager } from '@/utils/ListManager'
import { computed, ref } from 'vue'

const page = ref<Page>()
let onSave = () => {}

export const usePage = () => {
	const { content } = useContent()

	const allPages = computed(() => content.value?.pages || [])

	const updatePage = (page: Page) => {
		const ctx = content.value

		if (!ctx) return

		updatePages(
			ctx.pages.map(item => {
				if (item.id !== page.id) {
					return item
				}

				return page
			})
		)
	}

	const updatePages = (pages: Page[]) => {
		const ctx = content.value

		if (!ctx) return

		content.value = {
			...ctx,
			pages
		}
	}

	const removePage = (el: Page) => {
		const pages = new ListManager(allPages.value).remove(el)
		updatePages(pages)
	}

	const movePage = (el: Page, location: ListItemLocation) => {
		const pages = new ListManager(allPages.value).move(el, location)
		updatePages(pages)
	}

	const selectPage = (selectedPage?: Page) => {
		if (!selectedPage) {
			onSave = () => {}
			return
		}

		const modifiedPage = page.value = Page.create(selectedPage)
		onSave = () => {
			const pages = new ListManager(allPages.value).replace({
				...modifiedPage,
				updated: new Date(),
				version: page.value!.version + 1
			})
			updatePages(pages)
		}
	}

	const addPage = (parent: string | null, location: ListItemLocation) => {
		const newPage = Page.create({
			title: 'New page',
			path: 'page',
			parent: parent
		})

		onSave = () => {
			const pages = new ListManager(allPages.value).move({
				...newPage,
				updated: new Date()
			}, location)
			updatePages(pages)
		}

		page.value = newPage
	}

	const savePage = () => onSave()

	return {
		allPages,
		page,
		updatePage,
		selectPage,
		savePage,
		addPage,
		movePage,
		removePage
	}
}
