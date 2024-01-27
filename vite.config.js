// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

import path from "path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./"),
//     },
//   },
// })

export default defineConfig({
  base: '/staff/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
