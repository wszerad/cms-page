<script setup lang="ts">
import EditListLevel from '@/components/edit-list/EditListLevel.vue'
import { EditListItemInterface } from '@/types'
import { defineProps } from 'vue'

const props = defineProps<{
	items: EditListItemInterface[],
	active: EditListItemInterface
}>()
</script>

<template>
	<div class="EditList">
		<EditListLevel
			@move="$emit('move', $event)"
			@remove="$emit('remove', $event)"
			@pre="$emit('pre', $event)"
			@post="$emit('post', $event)"
			:level="0"
			:active="active"
			:items="items"
			v-slot="{ item }"
		>
			<slot v-bind="{ item }" />
		</EditListLevel>
	</div>
</template>
