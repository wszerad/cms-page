import { useMocks } from '@/composables/useMocks'
import { Content, Version } from '@/types'
import { computed, ref, shallowReactive } from 'vue'

const data = shallowReactive<Map<number, Content>>(new Map())
const version = ref<number>(1)

export const useContent = () => {
	const { content: contentMock } = useMocks()

	const content = computed<Content | null>({
		get() {
			return data.get(version.value) || null
		},
		set(content: Content | null) {
			if (!content) {
				return
			}

			console.log(content)

			if (!content.draft) {
				createNewVersion(content)
			} else {
				content.updated = new Date()
				data.set(version.value, content)
			}
		}
	})

	const versions = computed<Version[]>(() => {
		return Array.from(data.values())
	})

	const createNewVersion = (base: Content) => {
		const newVersion = Math.max(...versions.value.map(item => item.version), 0) + 1
		const newContent = Content.create({
			...base,
			draft: true,
			version: newVersion,
			created: new Date(),
			updated: new Date()
		})

		data.set(newVersion, newContent)
		version.value = newVersion
	}

	const save = () => {
		if (!content.value) return

		content.value.draft = false
		// TODO try to save
	}

	const load = () => {
		if (!Array.from(data.keys()).length) {
			data.set(contentMock.version, contentMock)
			version.value = contentMock.version
		}
	}

	load()

	return {
		version,
		versions,
		content,
		save
	}
}
