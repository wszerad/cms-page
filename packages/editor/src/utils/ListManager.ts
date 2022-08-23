
export interface ListItemLocation {
	pre?: string
	post?: string
}

export class ListManager<T extends { id: string }> {
	private list

	constructor(
		list: T[]
	) {
		this.list = list.slice()
	}

	remove(el: T): T[] {
		const index = this.list.findIndex(item => item.id === el.id)

		if (~index) {
			this.list.splice(index, 1)
		}
		return this.list
	}

	move(el: T, location: ListItemLocation): T[] {
		if (location.post) {
			this.moveAfter(el, location.post)
			return this.list
		}

		return this.moveBefore(el, location.pre)
	}

	replace(el: T) {
		const index = this.list.findIndex(item => item.id === el.id)

		if (JSON.stringify(this.list[index]) === JSON.stringify(el)) {
			return this.list
		}

		this.list.splice(index, 1, el)
		return this.list
	}

	moveBefore(el: T, id?: string): T[] {
		this.remove(el)
		const index = Math.max(this.list.findIndex(item => item.id === id) - 1, 0)
		this.list.splice(index, 0, el)
		return this.list
	}

	moveAfter(el: T, id?: string): T[] {
		this.remove(el)
		const index = Math.min(this.list.findIndex(item => item.id === id) + 1, this.list.length)
		this.list.splice(index, 0, el)
		return this.list
	}
}
