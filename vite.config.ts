import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      external: ['react'],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    react(),
    svgr(),
    dts({
      tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
      skipDiagnostics: true,
    }),
  ],
  resolve: {
    alias: {
      '@mocks': path.resolve(__dirname, 'src/__mocks__'),
      '@src': path.resolve(__dirname, 'src'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@styles': path.resolve(__dirname, 'assets/styles'),
      '@images': path.resolve(__dirname, 'assets/images'),
      '@icons': path.resolve(__dirname, 'assets/icons'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@api': path.resolve(__dirname, 'src/api'),
      app_settings: path.resolve(__dirname, 'app_settings.js'),
    },
  },
});
