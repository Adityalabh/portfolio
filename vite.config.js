import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import inject from '@rollup/plugin-inject';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  optimizeDeps: { include: ['jquery'] },
})
