import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Some from './Some.vue'
import 'virtual:windi.css'
import {
	Page,
	Content,
	Part,
	schema,
	PageRender,
	resolveContent
} from '@cms/editor'

export const createApp = ViteSSG(App, {
	routes: [
		{
			name: 'home',
			path: '',
			component: Some
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
})

const content: Content = Content.create({
	draft: false,
	pages: [
		Page.create({
			title: 'Home',
			path: '',
			parts: [
				Part.create({
					component: 'Header',
					props: {
						title: 'Header 1'
					}
				}),
				Part.create({
					component: 'Image',
					props: {
						src: 'https://picsum.photos/200'
					}
				}),
				Part.create({
					component: 'Image',
					props: {
						src: 'https://picsum.photos/seed/picsum/200/300'
					}
				}),
				Part.create({
					component: 'Header',
					props: {
						title: 'ending'
					}
				})
			]
		}),
		Page.create({
			title: 'Blog',
			path: 'blog',
			pages: [
				Page.create({
					title: 'Blogpost',
					path: ':id'
				})
			]
		}),
		Page.create({
			title: 'About',
			path: 'about',
			pages: [
				Page.create({
					title: 'Contact',
					path: 'contact'
				}),
				Page.create({
					title: 'Map',
					path: 'map'
				}),
			]
		}),
		Page.create({
			title: 'Single',
			path: 'single'
		}),
	]
})

export function includedRoutes() {
	return resolveContent(content)
}
