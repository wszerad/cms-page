<script setup lang="ts">
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import { useMenu } from '@/composables/useMenu'
import { usePage } from '@/composables/usePage'

const { savePage } = usePage()

const { toggle } = useMenu()
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
