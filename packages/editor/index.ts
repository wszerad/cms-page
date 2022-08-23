import PageRender from './src/cms/components/PageRender.vue'
import Editor from './src/components/Editor.vue'
import { Page, Part, Content, schema } from './src/types'
import { resolveContent } from './src/utils/resolveContent'
import { editorPlugin } from './src/plugin'

export {
	editorPlugin,
	PageRender,
	resolveContent,
	Page,
	Part,
	Content,
	schema,
	Editor
}
