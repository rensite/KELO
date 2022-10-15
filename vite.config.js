import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_vars.scss";`
        }
      }
    },
  })
}