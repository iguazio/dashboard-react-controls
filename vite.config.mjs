import commonjs from 'vite-plugin-commonjs'
import eslint from 'vite-plugin-eslint'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

function getEntryPoints() {
  const entries = {}
  entries.index = path.resolve(__dirname, 'src/lib/index.js')
  entries['nextGenComponents/index'] = path.resolve(
    __dirname,
    'src/lib/nextGenComponents/index.ts'
  )

  return entries
}

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    svgr(),
    eslint(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/lib/images/**/*',
          dest: 'images'
        },
        {
          src: 'src/lib/scss/**/*',
          dest: 'scss'
        },
        {
          src: 'src/lib/fonts/**/*',
          dest: 'fonts'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/lib/nextGenComponents')
    }
  },
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: getEntryPoints(),
      name: 'index',
      cssFileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      treeshake: false,
      external: [
        "@reduxjs/toolkit",
        'classnames',
        'final-form',
        'final-form-arrays',
        'lodash',
        'moment',
        'prop-types',
        'react',
        'react-dom',
        'react-final-form',
        'react-final-form-arrays',
        'react-modal-promise',
        'react-redux',
        'react-router-dom',
        'react-transition-group',
        'react/jsx-dev-runtime',
        'react/jsx-runtime',
        /^@radix-ui\//,
        /^@tanstack\//,
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react',
        'date-fns',
        'zustand',
        'react-day-picker'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
      }
    }
  }
})
