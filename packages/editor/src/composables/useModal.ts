import { ref } from 'vue'
import PageModal from '@/components/modals/PageModal.vue'
import ComponentModal from '@/components/modals/ComponentModal.vue'

const modal = ref(null)

export const useModal = () => {
	const openModal = (name: 'component' | 'page') => {
		modal.value = ({
			component: ComponentModal,
			page: PageModal
		})[name]
	}


	return {
		openModal,
		modal
	}
}
