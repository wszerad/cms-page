import { PropertiesSchema } from 'ajv/lib/types/json-schema'
import { Component } from 'vue'

export interface ComponentManifest {
	component: Component
	schema: PropertiesSchema<Record<string, any>>
}

export type Manifest = Record<string, ComponentManifest>

export const schema = <T extends Record<string, any>>(component: Component, schema: PropertiesSchema<T>) => {
	return {
		component,
		schema: schema as PropertiesSchema<Record<string, any>>
	}
}
