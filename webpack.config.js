const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
//const createVendorChunk = require('webpack-create-vendor-chunk');

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const isProduction = env.production === true;
  const platform = env.platform; // 'default' by default


  return {
    devtool: (() => {
      if (isProduction) return 'hidden-source-map'
      else return 'cheap-module-eval-source-map'
    })(),
    entry: {
      filename: ['./src/main.js'],
      // ,
      // vendor: ["vue"],
      // sourceMapFilename: '[name].map'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      // ,
      // sourceMapFilename: '[name].map'
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js',
      },
      // alias: (() => {
      //   if (isProduction) {
      //     return { vue$: 'vue/dist/vue.runtime.common.js' };
      //   } else {
      //     return { vue$: 'vue/dist/vue.common.js' };
      //   }
      // })()

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
      //new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
          template: 'src/index.html',
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object")
        })
         //createVendorChunk()
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "vendor",
      //
      //   //filename: "vendor.js"
      //   // (Give the chunk a different name)
      //
      // //  minChunks: Infinity,
      //   // (with more entries, this ensures that no other module
      //   //  goes into the vendor chunk)
      // })
    ]
  };
};
