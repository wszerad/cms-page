let i = 0

export class Version {
	version: number = 1
	draft: boolean = true
	updated: Date = new Date()
	created: Date = new Date()
}

export class Page extends Version {
	id: string = `${Date.now()}${i++}`
	parts: Part[] = []
	pages: Page[] = []
	title!: string
	path!: string

	static create(data: Partial<Page> & Pick<Page, 'title' | 'path'>): Page {
		return Object.assign(
			new Page(),
			{
				...data,
				parts: (data.parts || []).map(Part.create),
				pages: (data.pages || []).map(Page.create),
			}
		)
	}
}

export interface PagesTreeItem {
	id: string
	page: Page
	ancestors: Page[]
}

export class Part {
	id: string = `${Date.now()}${i++}`
	component!: string
	props?: any
	slots?: Record<string, Part>

	static create(data: Partial<Part> & Pick<Part, 'component'>) {
		return Object.assign(
			new Part(),
			{
				...data,
				slots: Object.entries(data.slots || {}).reduce((acc, [key, part]) => {
					acc[key] = Part.create(part)
					return acc
				}, {} as Record<string, Part>)
			}
		)
	}
}

export class Content extends Version {
	pages: Page[] = []

	static create(data: Partial<Content>) {
		return Object.assign(
			new Content(),
			{
				...data,
				pages: (data.pages || []).map(Page.create)
			}
		)
	}
}
