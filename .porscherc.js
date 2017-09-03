export default {
  entry: { app: './src/index.jsx' },
  extraBabelPlugins: [
    ['mickey-model-loader', { loaderOptions: { regExp: /\.js$/ } }],
    'transform-runtime',
    'transform-decorators-legacy',
    ['import', { 'libraryName': 'antd', 'style': true }]
  ],
}
