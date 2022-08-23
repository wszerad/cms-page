import * as path from 'path'
import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  plugins: [
    Vue(),
		WindiCSS(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src')
			}
		],
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3001',
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
}

export default config
