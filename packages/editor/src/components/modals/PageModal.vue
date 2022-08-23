<script setup lang="ts">
import Group from '@/components/form/Group.vue'
import Row from '@/components/form/Row.vue'
import Text from '@/components/inputs/Text.vue'
import Url from '@/components/inputs/Url.vue'
import ComponentsList from '@/components/page/ComponentsList.vue'
import { usePage } from '@/composables/usePage'

const { page } = usePage()

</script>

<template>
	<div class="PageModal">
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
