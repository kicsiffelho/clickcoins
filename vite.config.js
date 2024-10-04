import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: 'frontend',
    build: {
        outDir: path.resolve(__dirname, 'frontend/dist'),
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'frontend/index.html'),
                register: path.resolve(__dirname, 'frontend/reg.html'),
            },
        },
    },
    esbuild: {
        target: 'esnext',
    },
});