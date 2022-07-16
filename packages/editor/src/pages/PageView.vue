<script setup lang="ts">
import Text from '@/cms/types/Text.vue'
import Url from '@/cms/types/Url.vue'
import ComponentsList from '@/components/page/ComponentsList.vue'
import Group from '@/components/form/Group.vue'
import Row from '@/components/form/Row.vue'
import { usePage } from '@/composables/usePage'
import { Page } from '@/types'
import { ref, watch } from 'vue'

const { page, allPages } = usePage()

const form = ref(Page.create(page.value || allPages.value[0]))

watch(page, (now) => {
	if (!now) return
	form.value = Page.create(now)
})
</script>

<template>
	<div class="PageView" v-if="page">
		<Group title="Page">
			<Row label="Title">
				<Text v-model="form.title" />
			</Row>
			<Row label="Path">
				<Url v-model="form.path" />
			</Row>
		</Group>
		<Group title="Components">
			<ComponentsList />
		</Group>
	</div>
</template>
