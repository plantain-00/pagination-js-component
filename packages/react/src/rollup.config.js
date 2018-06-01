import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'packages/react/dist/index.js',
  name: 'Pagination',
  plugins: [
    resolve(),
    uglify(),
    commonjs()
  ],
  output: {
    file: 'packages/react/dist/pagination-react-component.min.js',
    format: 'umd'
  },
  external: [
    'react',
    'react-dom'
  ]
}
