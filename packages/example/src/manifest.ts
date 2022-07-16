import { defineAsyncComponent } from 'vue'

// export const Components = {
// 	Header: defineAsyncComponent(() => import('@/pages/components/Header.vue')),
// 	Image: defineAsyncComponent(() => import('@/cms/components/Image.vue'))
// }

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
