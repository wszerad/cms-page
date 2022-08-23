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

	const home = Page.create({
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
	})

	const blog = Page.create({
		title: 'Blog',
		path: 'blog',
	})

	const about = Page.create({
		title: 'About',
		path: 'about'
	})

	const content: Content = Content.create({
		draft: false,
		pages: [
			home,
			blog,
			Page.create({
				parent: blog.id,
				title: 'Blogpost',
				path: ':id'
			}),
			about,
			Page.create({
				parent: about.id,
				title: 'Contact',
				path: 'contact'
			}),
			Page.create({
				parent: about.id,
				title: 'Map',
				path: 'map'
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
