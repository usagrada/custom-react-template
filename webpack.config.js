// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.tsx',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/static`,
    // 出力ファイル名
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
  devServer: {
    port: 3000,
    contentBase: 'static',
    open: true,
    hot: true,
  },
};
