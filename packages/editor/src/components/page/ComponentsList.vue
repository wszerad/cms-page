<script setup lang="ts">
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import DragList from '@/components/sidebar/DragList.vue'
import { useComponent } from '@/composables/useComponent'
import { useNavigation } from '@/composables/useNavigation'
import { usePage } from '@/composables/usePage'
import { Part } from '@/types'
import { computed } from 'vue'

const { page } = usePage()
const { allComponents, selectComponent } = useComponent()
const { componentLink } = useNavigation()

const parts = computed<Part[]>({
	get() {
		return allComponents.value
	},
	set(components: Part[]) {
		page.value!.parts = components
	}
})

const onAddComponent = () => {
	selectComponent(Part.create({
		component: ''
	}))
}
</script>

<template>
	<div class="ComponentsList">
<!--		<DragList-->
<!--			v-model="parts"-->
<!--		>-->
<!--			<template v-slot="item">-->
<!--				<RouterLink-->
<!--					:to="componentLink(item)"-->
<!--				>-->
<!--					{{ item.component }}-->
<!--				</RouterLink>-->
<!--			</template>-->
<!--		</DragList>-->
		<Button @click="onAddComponent">
			<Icon name="add" />
			Add Component
		</Button>
	</div>
</template>
