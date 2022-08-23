<script setup lang="ts">
import EditList from '@/components/edit-list/EditList.vue'
import { usePage } from '@/composables/usePage'
import { Page } from '@/types'
import { ref} from 'vue'

const { allPages, addPage, movePage, removePage } = usePage()
const active = ref<Page | null>(null)

const onPre = (e: Page) => {
	active.value
		? movePage({ ...active.value, parent: e.parent }, { pre: e.id })
		: addPage(e.parent, { pre: e.id })
}

const onPost = (e: Page) => {
	active.value
		? movePage({ ...active.value, parent: e.parent }, { post: e.id })
		: addPage( e.parent, { post: e.id })
}

</script>

<template>
	<aside class="HomeView">
		<EditList
			:items="allPages"
			:active="active"
			@move="active = $event"
			@remove="removePage"
			@pre="onPre"
			@post="onPost"
			v-slot="{ item }"
		>
			{{ item.title }}
		</EditList>
	</aside>
</template>
