import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import 'virtual:windi.css'
import {
	PageRender,
	resolveContent,
	editorPlugin
} from '@cms/editor'

export const createApp = ViteSSG(App, {
	routes: [
		{
			name: 'home',
			path: '',
			component: PageRender
		},
		{
			name: 'page',
			path: '/:page',
			component: PageRender
		},
		{
			name: 'subpage',
			path: '/:page/:subpage',
			component: PageRender
		}
	]
}, ({ app }) => {
	app.use(editorPlugin)
})

export async function includedRoutes() {
	const content = await fetch('http://localhost:3001/public/0.json')
	return resolveContent(await content.json())
}
