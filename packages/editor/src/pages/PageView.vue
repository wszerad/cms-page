<script setup lang="ts">
import Text from '@/components/inputs/Text.vue'
import Url from '@/components/inputs/Url.vue'
import ComponentsList from '@/components/page/ComponentsList.vue'
import Group from '@/components/form/Group.vue'
import Row from '@/components/form/Row.vue'
import { usePage } from '@/composables/usePage'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const { page, savePage } = usePage()

onBeforeRouteLeave(savePage)
onBeforeRouteUpdate(savePage)
</script>

<template>
	<div class="PageView" v-if="page">
		<Group title="Page">
			<Row label="Title">
				<Text v-model="page.title" />
			</Row>
			<Row label="Path">
				<Url v-model="page.path" />
			</Row>
		</Group>
		<Group title="Components">
			<ComponentsList />
		</Group>
	</div>
</template>
