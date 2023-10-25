import typescript from '@rollup/plugin-typescript'
const config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [typescript()],
}

export default config
