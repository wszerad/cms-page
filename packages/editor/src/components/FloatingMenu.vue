<script setup lang="ts">
import Select from '@/cms/types/Select.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import { useContent } from '@/composables/useContent'
import { useMenu } from '@/composables/useMenu'
import { usePage } from '@/composables/usePage'
import { computed } from 'vue'

const { savePage } = usePage()
const { versions, version } = useContent()
const { toggle } = useMenu()

const options = computed(() => {
	return versions.value.map(item => ({ label: `${item.version}`, value: item.version }))
})
</script>

<template>
	<header class="FloatingMenu flex justify-between">
		<Button
			@click="toggle"
		>
			<Icon
				class="text-4xl"
				name="menu"
			/>
		</Button>
		<div>
			<Select
				v-model="version"
				:options="options"
			/>
		</div>
		<Button
			@click="savePage"
		>
			<Icon
				class="text-4xl"
				name="save"
			/>
		</Button>
	</header>
</template>

<style lang="scss">
.FloatingMenu {
		@apply p-1;
}
</style>
