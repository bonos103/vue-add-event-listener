import buble from '@rollup/plugin-buble' // 適切にブラウザをサポートするトランスパイラおよびポリフィル

const globals = {
  vue: 'Vue',
}

export default {
    input: 'index.js', // Path relative to package.json
    output: [
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'VueAddEventListener',
        globals,
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        globals,
      },
      {
        file: 'dist/index.min.js',
        format: 'iife',
        name: 'VueAddEventListener',
        globals,
      },
    ],
    external: ['vue'],
    plugins: [
        buble(), // ES5 へトランスパイルする
    ],
}