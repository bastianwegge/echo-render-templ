// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'web/assets'),
        minify: 'esbuild',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'web/app/main.ts'),
            name: 'app',
            formats: ['iife'],
            // the proper extensions will be added
            fileName(format, entryAlias) {
                if (format === 'iife') {
                    return 'app-lib.js';
                }
            }
        },
    },
})