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
                welcome: path.resolve(__dirname, 'frontend/welcome.html'),
                game: path.resolve(__dirname, 'frontend/main.html'),
                store: path.resolve(__dirname, 'frontend/store.html'),
                score: path.resolve(__dirname, 'frontend/score.html'),
            },
        },
        chunkSizeWarningLimit: 1000,
    },
    esbuild: {
        target: 'esnext',
    },
});