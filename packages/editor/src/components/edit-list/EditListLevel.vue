<script setup lang="ts">
import EditListItem from '@/components/edit-list/EditListItem.vue'
import { EditListItemInterface } from '@/types'
import { defineProps, computed } from 'vue'

const props = defineProps<{
	items: EditListItemInterface[],
	active: EditListItemInterface,
	level: number,
	parent?: string
}>()

defineEmits(['pre', 'post', 'move', 'remove'])

const filteredItems = computed(() => {
	return props.items.filter(item => {
		return item.parent == props.parent
	})
})
</script>

<template>
	<template v-for="(item, index) in filteredItems">
		<EditListItem
			v-if="!index || item.id !== active?.id"
			@click="$emit('pre', item)"
			:level="level"
			placeholder
		/>
		<EditListItem
			@move="$emit('move', item)"
			@remove="$emit('remove', item)"
			:item="item"
			:active="item.id === active?.id"
			:level="level"
			v-slot="{ item }"
		>
			<slot v-bind="{ item }" />
		</EditListItem>
		<EditListLevel
			v-if="item.id !== active?.id"
			@move="$emit('move', $event)"
			@remove="$emit('remove', $event)"
			@pre="$emit('pre', $event)"
			@post="$emit('post', $event)"
			:parent="item.id"
			:level="level + 1"
			:active="active"
			:items="items"
			v-slot="{ item }"
		>
			<slot v-bind="{ item }" />
		</EditListLevel>
		<EditListItem
			v-if="item.id !== active?.id"
			@click="$emit('post', item)"
			:level="level"
			placeholder
		/>
	</template>
</template>

