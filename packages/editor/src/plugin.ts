import { defaultManifest } from '@/cms/defaultManifest'
import { ManifestKey } from '@/types'
import { App } from 'vue'

interface EditorPluginOptions {

}

export const editorPlugin = {
	install(app: App, options: EditorPluginOptions) {
		app.provide(ManifestKey, defaultManifest)
	}
}
