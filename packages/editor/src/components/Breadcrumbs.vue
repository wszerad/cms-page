<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { useComponent } from '@/composables/useComponent'
import { useNavigation } from '@/composables/useNavigation'
import { usePage } from '@/composables/usePage'
import { Page, Part } from '@/types'
import { computed } from 'vue'
const { allPagesFlat, page } = usePage()
const { component } = useComponent()
const { homeLink, componentLink, pageLink } = useNavigation()

const crumbs = computed(() => {
	if (!page) return []

	const ancestors = allPagesFlat.value
		.find(item => item.id === page.value?.id)
		?.ancestors || []

	return [
		{},
		...ancestors,
		page.value,
		component.value
	].filter(item => !!item)
})

const getName = (el: Page | Part | unknown) => {
	if (el instanceof Page) {
		return el.title
	}
	if (el instanceof Part) {
		return el.component
	}
	return 'Home'
}

const getLink = (el: Page | Part | unknown) => {
	if (el instanceof Page) {
		return pageLink(el)
	}
	if (el instanceof Part) {
		return componentLink(el)
	}
	return homeLink()
}

</script>

<template>
<nav class="flex items-center mb-4" v-if="crumbs.length > 1">
	<template v-for="(crumb, index) in crumbs">
		<RouterLink
			:to="getLink(crumb)"
			class="inline-flex items-center"
		>
			<Icon
				v-if="!index"
				name="home"
				class="text-xl"
			/>
			<span
				v-else
				class="font-bold"
			>
				{{ getName(crumb) }}
			</span>
		</RouterLink>
		<div class="flex items-center last-of-type:hidden mx-2">
			<span>
				>
			</span>
		</div>
	</template>
</nav>
</template>
