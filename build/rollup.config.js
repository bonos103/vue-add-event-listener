import buble from '@rollup/plugin-buble' // 適切にブラウザをサポートするトランスパイラおよびポリフィル

export default {
    input: 'index.js', // Path relative to package.json
    output: [
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'VueAddEventListener',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
    ],
    // 依存モジュールを含めたくない場合に設定する
    // external: ['vue'],
    plugins: [
        buble(), // ES5 へトランスパイルする
    ],
}