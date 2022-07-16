import { useMocks } from '@/composables/useMocks'
import { Content, Version } from '@/types'
import { ref, computed, shallowReactive } from 'vue'

const data = shallowReactive<Map<number, Content>>(new Map())
const version = ref<number>(1)

export const useContent = () => {
	const { content: contentMock } = useMocks()

	const content = computed<Content>(() => {
			return data.get(version.value) || Content.create({})
		})

	const versions = computed<Version[]>(() => {
		return Array.from(data.values())
	})

	const createNewVersion = (base: Content) => {
		const newVersion = Math.max(...versions.value.map(item => item.version), 0) + 1
		const mockContent = Content.create({
			...base,
			version: newVersion
		})

		data.set(newVersion, mockContent)
		version.value = newVersion
	}

	const save = () => {
		if (!content.value) return

		content.value.draft = false
		// TODO try to save
		createNewVersion(content.value)
	}

	const load = () => {
		if (!Array.from(data.keys()).length) {
			createNewVersion(contentMock)
		}
	}

	load()

	return {
		versions,
		content,
		save
	}
}
