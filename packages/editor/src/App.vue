<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import FloatingMenu from '@/components/FloatingMenu.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import { useComponent } from '@/composables/useComponent'
import { useMenu } from '@/composables/useMenu'
import { useNavigation } from '@/composables/useNavigation'
import { usePage } from '@/composables/usePage'
import { router } from '@/routing'
import { useBreakpoints } from '@vueuse/core'
import { onMounted, onUnmounted } from 'vue'

const { open } = useMenu()
const { homeLink, pageLink } = useNavigation()
const { component, selectComponent } = useComponent()
const { selectPage, allPagesFlat } = usePage()
const breakpoints = useBreakpoints({
	mobile: 1024
})

onUnmounted(
	router.beforeResolve(guard => {
		const resolvers: undefined | string[] = guard.meta?.resolvers as any

		if (resolvers?.includes('page')) {
			const page = allPagesFlat.value.find(page => page.id === guard.params.id)

			if (!page) {
				return homeLink()
			}

			selectPage(page.page)

			if (resolvers?.includes('component')) {
				const component = page.page.parts.find(item => item.id === guard.params.componentId)

				if (!component) {
					return pageLink(page.page)
				}

				selectComponent(component)
				return
			} else {
				selectComponent()
			}
			return
		}

		selectPage()
		selectComponent()
		return
	})
)

onMounted(() => {
	if (breakpoints.isGreater('mobile')) {
		open()
	}
})
</script>

<template>
	<main>
		<FloatingMenu />
		<div class="flex">
			<Sidebar class="min-w-[200px]" />
			<article class="flex-1 m-8 mt-0">
				<Breadcrumbs />
				<RouterView />
			</article>
		</div>
	</main>
</template>
