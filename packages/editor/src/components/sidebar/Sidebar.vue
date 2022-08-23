<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'
import { useNavigation } from '@/composables/useNavigation'
import { usePage } from '@/composables/usePage'

const { allPagesFlat } = usePage()
const { pageLink } = useNavigation()

const { visible } = useMenu()
</script>

<template>
	<aside class="Sidebar">
		<div
			v-if="visible"
			class="Sidebar_content"
		>
			<template v-for="item in allPagesFlat">
				<RouterLink
					v-if="item.page"
					class="block"
					:to="pageLink(item.page)"
				>
					{{ item.page.title }}
				</RouterLink>
				<div
					v-else
					class="fixed-item border-b-1 h-2"
				/>
			</template>
		</div>
	</aside>
</template>
