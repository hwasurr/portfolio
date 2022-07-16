import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
      parserOpts: {
        plugins: ['decorators-legacy', 'classProperties']
      }
    },
  })],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  // optimizeDeps: {
  //   include: ['@my/common'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/packages\/common/]
  //   }
  // }
});
