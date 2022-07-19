import { ComponentManifest, ManifestKey } from '@/types'
import { defineComponent, h, onMounted, PropType } from 'vue'
import Editor from '@/components/Editor.vue'
import '@/assets/styles.scss'
import { router } from '@/routing'
import 'virtual:windi.css'
import { createApp } from 'vue'

export default defineComponent({
	props: {
		manifest: {
			type: Object as PropType<ComponentManifest>,
			default: () => ({})
		}
	},
	setup(props) {
		const app = createApp(Editor)
		app.use(router)
		app.provide(ManifestKey, props.manifest)

		onMounted(() => {
			app.mount('#cms-view')
		})

		return () => {
			return h('div', {
				id: 'cms-view'
			})
		}
	}
})

