import { Content, Manifest, Page, Part, schema } from '@/types'
import Image from '@/cms/components/Image.vue'
import Header from '@/cms/components/Header.vue'

export const useMocks = () => {
	const manifest: Manifest = {
		'Image': schema<{ src: string }>(Image, {
			src: {
				type: 'string'
			}
		}),
		'Header': schema<{ title: string }>(Header, {
			title: {
				type: 'string',
				nullable: true
			}
		})
	}

	const content: Content = Content.create({
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

	return {
		content,
		manifest
	}
}
