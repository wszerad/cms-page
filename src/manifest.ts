import { defineAsyncComponent } from 'vue'

export const Components = {
	Header: defineAsyncComponent(() => import('./components/Header.vue')),
	Image: defineAsyncComponent(() => import('./components/Image.vue'))
}

export default {
	title: 'Home',
	parts: [
		{
			component: 'Header',
			props: {
				title: 'Test'
			}
		}
	],
	pages: {
		'/test': {
			parts: [
				{
					component: 'Image',
					props: {
						src: 'kot.com/img.jpg'
					}
				}
			]
		}
	}
}
