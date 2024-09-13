// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    define: {
        'process.env': {}
    },
    build: {
        outDir: resolve(__dirname, 'web/assets'),
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/main.tsx'),
            name: 'app',
            formats: ['iife'],
            // the proper extensions will be added
            fileName(format, entryAlias) {
                if (format === 'iife') {
                    return 'app.js';
                }
            }
        },
        // rollupOptions: {
        //     // make sure to externalize deps that shouldn't be bundled
        //     // into your library
        //     external: ['react'],
        //     output: {
        //         // Provide global variables to use in the UMD build
        //         // for externalized deps
        //         globals: {
        //             react: 'React',
        //         },
        //     },
        // }
    },
})