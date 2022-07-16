import * as path from 'path'
import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
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
