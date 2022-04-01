import { defineConfig } from 'rollup'
import { swc, defineRollupSwcOption, minify, defineRollupSwcMinifyOption } from 'rollup-plugin-swc3'

import package_ from './package.json'

export default defineConfig({
  input: 'src/index.tsx',
  output: [
    {
      file: package_.main,
      exports: 'named',
      format: 'cjs'
    },
    {
      file: package_.module,
      format: 'es'
    }
  ],
  treeshake: {
    moduleSideEffects: false
  },
  plugins: [
    swc(
      defineRollupSwcOption({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      })
    ),
    minify(
      defineRollupSwcMinifyOption({
        mangle: true
      })
    )
  ],
  external: ['react', 'antd']
})
