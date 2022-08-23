<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { defineProps } from 'vue'

defineEmits(['click', 'move', 'remove'])

const props = defineProps<{
	item?: any,
	placeholder?: boolean,
	level: number,
	active?: boolean
}>()
</script>

<template>
	<div
		class="EditListItem"
		:class="{
			'pl-2': level === 1,
			'pl-4': level === 2,
			'pl-6': level === 3,
			'pl-8': level === 4,
			'pl-10': level === 5,
		}"
	>
		<div
			class="rounded-md border-1 p-2"
			:class="{
				'bg-teal-300': active,
				'bg-zinc-500': placeholder && !active,
				'bg-lime-300': !placeholder
			}"
			@click="$emit('click')"
		>
			<Icon
				v-if="!placeholder"
				@click.stop="$emit('move')"
				name="open_with"
			/>
			<slot
				v-if="item"
				v-bind="{ item }"
			/>
			<Icon
				v-if="!placeholder"
				@click.stop="$emit('remove')"
				name="delete"
			/>
		</div>
	</div>
</template>
