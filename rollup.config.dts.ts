import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import prettier from 'rollup-plugin-prettier'

import package_ from './package.json'

export default defineConfig({
  input: 'dist-dts/index.d.ts',
  output: [{ file: package_.types, format: 'es' }],
  plugins: [dts(), prettier({ parser: 'typescript' })]
})
