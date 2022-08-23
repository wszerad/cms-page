import { Manifest } from '@/types'
import Header from './components/Header.vue'
import Image from './components/Image.vue'

export const defaultManifest: Manifest = {
	Header: {
		component: Header,
		schema: {
			title: {
				type: 'string'
			}
		}
	},
	Image: {
		component: Image,
		schema: {
			title: {
				type: 'string'
			}
		}
	}
}
