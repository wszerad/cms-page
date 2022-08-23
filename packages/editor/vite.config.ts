import { resolve } from 'path'
import * as path from 'path'
import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
	build: {
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'CMSEditor',
			fileName: 'cms-editor'
		},
		rollupOptions: {
			external: ['vue', 'vue-router'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [
    Vue(),
		WindiCSS(),
  ],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src')
			}
		],
	},
}

export default config
