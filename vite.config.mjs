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
  build: {
    minify: false,
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
        'react',
        'react-dom',
        'classnames',
        'final-form',
        'final-form-arrays',
        'lodash',
        'prop-types',
        'react-final-form',
        'react-final-form-arrays',
        'react-modal-promise',
        'react-transition-group'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/lib',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'final-form': 'FinalForm'
        }
      }
    }
  }
})
