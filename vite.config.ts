import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',

    // Source maps - disable for production, faster builds
    sourcemap: false,

    // Chunk splitting strategy - optimize for browser caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
        },
      },
    },

    // Compression and optimization
    minify: 'esbuild', // faster than terser
    cssMinify: true,

    // Target modern browsers for smaller output
    target: 'es2020',
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    open: false,
  },

  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    entries: ['./src/main.tsx'],
  },

  // Cache directory (explicit for clarity)
  cacheDir: 'node_modules/.vite',
})
