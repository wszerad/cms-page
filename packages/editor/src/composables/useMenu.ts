import { ref } from 'vue'

const visible = ref(false)

export const useMenu = () => {
	const open = () => {
		visible.value = true
	}

	const close = () => {
		visible.value = false
	}

	const toggle = () => visible.value ? close() : open()

	return {
		visible,
		close,
		open,
		toggle
	}
}
