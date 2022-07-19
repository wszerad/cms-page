<script setup lang="ts">
import Draggable from "vuedraggable";
import { computed } from 'vue'

const props = defineProps<{
	modelValue: any[]
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', value: any[]): void
	(e: 'move', value: any): void
	(e: 'start', value: any): void
	(e: 'end', value: any): void
}>()

const model = computed({
	get() {
		return props.modelValue
	},
	set(value: any[]) {
		emit('update:modelValue', value)
	}
})

const move = (e: any) => {
	emit('move', e.draggedContext)
	return true
}

const dragOptions = {
	animation: 200,
	disabled: false,
	ghostClass: 'ghost',
	filter: '.fixed-item',
	itemKey: 'key'
}
</script>

<template>
	<div class="DragList">
		<Draggable
			class="list-group list-none"
			tag="ul"
			v-model="model"
			v-bind="dragOptions"
			@start="$emit('start', $event)"
			@end="$emit('end', $event)"
			:move="move"
		>
			<template #item="{ element }" :key="element.title">
				<li class="list-group-item">
					<slot v-bind="element" />
				</li>
			</template>
		</Draggable>
	</div>
</template>

<style lang="scss">
.flip-list-move {
	transition: transform 0.5s;
}
.no-move {
	transition: transform 0s;
}
.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
.list-group {
	min-height: 20px;
}
.list-group-item {
	cursor: move;
}
.list-group-item i {
	cursor: pointer;
}
</style>
