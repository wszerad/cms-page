import type { UserConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [
    Vue(),
    Components()
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config
