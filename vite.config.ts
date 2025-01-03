import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from "vite-plugin-top-level-await";
export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`
    }),
    react()
  ]
})