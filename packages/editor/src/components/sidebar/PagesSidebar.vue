<script setup lang="ts">
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import DragList from '@/components/sidebar/DragList.vue'
import { useContent } from '@/composables/useContent'
import { useNavigation } from '@/composables/useNavigation'
import { usePage } from '@/composables/usePage'
import { Content, Page } from '@/types'
import { computed, ref } from 'vue'

interface PageTree {
	id: string
	page: Page | null
	pathKey: string
	insert: (page: Page) => void
	remove: () => void
}

const { content } = useContent()
const { pageLink } = useNavigation()
const { addPage } = usePage()
const targetIndex = ref<number>(0)
const movedItem = ref<PageTree>()
const hiddenKey = ref<string | null>(null)

const onMove = ({ futureIndex, element }: any) => {
	targetIndex.value = futureIndex
	movedItem.value = element
}

const onStart = ({ oldIndex }: any) => {
	hiddenKey.value = pages.value[oldIndex].pathKey + '-'
}

const onEnd = () => {
	hiddenKey.value = null
}

const isHidden = (item: PageTree) => {
	return hiddenKey.value && item.pathKey.startsWith(hiddenKey.value)
}

const extractPages = (pages: Page[], parentKey: string = ''): PageTree[] => {
	return pages.flatMap((page, index) => {
		const pathKey = `${parentKey}-${page.id}`
		return [
			{
				id: page.id,
				page,
				pathKey,
				insert(addPage) {
					page.pages.unshift(addPage)
				},
				remove() {
					const index = pages.indexOf(page)
					pages.splice(index, 1)
				}
			},
			...extractPages(page.pages, pathKey),
			{
				id: page.id + '-slot',
				page: null,
				pathKey: pathKey + '-slot',
				insert(addPage) {
					pages.splice(index + 1, 0, addPage)
				},
				remove() {}
			}
		]
	})
}

const mergePages = (tree: PageTree[]) => {
	const newIndex = targetIndex.value
	const prevElement = tree[newIndex - 1]
	const rootPages = contentClone.value.pages

	if (!prevElement) {
		rootPages.unshift(movedItem.value!.page!)
		movedItem.value?.remove()
		return rootPages
	}

	prevElement.insert(movedItem.value!.page!)
	movedItem.value?.remove()
	return rootPages
}

const contentClone = computed(() => Content.create(content.value || {}))

const pages = computed<PageTree[]>({
	get() {
		return extractPages(contentClone.value.pages)
	},
	set(pageTree: PageTree[]) {
		content.value = {
			...(content.value || {}),
			pages: mergePages(pageTree)
		}
	}
})
</script>

<template>
	<div class="PagesSidebar">
		<DragList
			v-model="pages"
			@move="onMove"
			@start="onStart"
			@end="onEnd"
		>
			<template v-slot="item">
				<RouterLink
					v-if="item.page"
					v-show="!isHidden(item)"
					:to="pageLink(item.page)"
				>
					{{ item.page.title }}
				</RouterLink>
				<div
					v-else
					v-show="!isHidden(item)"
					class="fixed-item border-b-1 h-2"
				/>
			</template>
		</DragList>
		<Button @click="addPage">
			<Icon name="add" class="text-black" />
			Add page
		</Button>
	</div>
</template>
