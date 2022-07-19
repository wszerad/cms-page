<script setup lang="ts">
import PagesSidebar from '@/components/sidebar/PagesSidebar.vue'
import { useMenu } from '@/composables/useMenu'

const { visible } = useMenu()
</script>

<template>
	<aside class="Sidebar">
		<div class="Sidebar_content">
<!--			<PagesSidebar-->
<!--				v-show="visible"-->
<!--			/>-->
		</div>
	</aside>
</template>
