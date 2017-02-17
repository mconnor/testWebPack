const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const isProduction = env.production === true
  const platform = env.platform // 'default' by default

  return {
    devtool: (() => {
      if (isProduction) return 'hidden-source-map'
      else return 'cheap-module-eval-source-map'
    })(),
    entry: {
      filename: './src/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js',
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js',
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015-native-modules'],
          },
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'My App',
          template: 'src/index.html',
        })
    ]
  }
}
