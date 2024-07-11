import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': '/src',
            'components': '/src/components',
            'services': '/src/services',
            'pages': '/src/pages'
        }
    },
    base: '/app',
    publicDir: 'app',
    build: {
        chunkSizeWarningLimit: 700,
        assetsInclude: 'assets/images/',
        outDir: fileURLToPath(new URL('../public/app', import.meta.url))
    },
})
