import { defineConfig } from 'rollup'
import css from '@modular-css/rollup'
import { minify, defineRollupSwcMinifyOption } from 'rollup-plugin-swc3'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'

import package_ from './package.json'

export default defineConfig({
  input: 'src/index.tsx',
  output: [
    {
      file: package_.main,
      exports: 'named',
      format: 'cjs',
      assetFileNames: '[name][extname]',
      inlineDynamicImports: true
    },
    {
      file: package_.module,
      format: 'es',
      assetFileNames: '[name][extname]'
    }
  ],
  treeshake: {
    moduleSideEffects: false
  },
  plugins: [
    url(),
    typescript({ target: 'es2019' }),
    css(),
    minify(
      defineRollupSwcMinifyOption({
        mangle: true
      })
    )
  ],
  external: ['react', 'antd']
})
