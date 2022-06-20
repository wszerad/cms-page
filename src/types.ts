export interface Page {
	parts: Part[]
	pages?: Record<string, Page>
}

export interface Manifest extends Page {
	title: string
}

export interface Part {
	component: string
	props?: any
	slots?: Part | Record<string, Part>
}
