import { useComponent } from '@cms/editor/src/composables/useComponent'
import { useNavigation } from '@cms/editor/src/composables/useNavigation'
import { usePage } from '@cms/editor/src/composables/usePage'
import { PagesTreeItem } from '@cms/editor/src/types'
import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import { Page } from '@/types'
import manifest from '@/manifest'
import 'virtual:windi.css'
import '@/assets/styles.scss'

export const createApp = ViteSSG(App, {
	routes: [
		{
			name: 'home',
			path: '',
			component: () => import('@/pages/index.vue')
		},
		{
			name: 'page',
			path: '/:page',
			component: () => import('@/pages/index.vue'),
		},
		{
			name: 'subpage',
			path: '/:page/:subpage',
			component: () => import('@/pages/index.vue'),
		},
	]
})

function nestedPages(list: string[], pages?: Record<string, Page>) {
	if (!pages) {
		return list
	}

	Object
		.entries(pages)
		.forEach(([path, page]) => {
			list.push(path)
			nestedPages(list, page.pages)
		})
}

export async function includedRoutes() {
	const routes: string[] = []
	routes.push('')
	nestedPages(routes, manifest.pages)
	return routes
}
