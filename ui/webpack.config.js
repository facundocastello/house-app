const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const entry = ['./app/index.js'];
  if (!isProduction) {
    entry.push('webpack-dev-server/client?http://0.0.0.0:4000');
  }

  return {
    entry,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['*', '.mjs', '.js', '.svelte'],
    }, // Añadimos el soporte para las extensiones que utiliza svelte
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        }, // Creamos la regla para nuestros archivos JS
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              hotReload: true,
              dev: !isProduction,
            },
          },
        }, // Utilizamos svelte-loader para trabajar con los archivos .svelte
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    plugins: [
      // new webpack.DefinePlugin({
      //   'process.env.API_URL': JSON.stringify(
      //     isProduction
      //       ? 'http://AWSIP:3000/api/'
      //       : 'http://192.168.0.62:3000/api/'
      //   )
      // }),
      // new MiniCssExtractPlugin({
      //   // Options similar to the same options in webpackOptions.output
      //   // all options are optional
      //   filename: '[name].css',
      //   chunkFilename: '[id].css',
      //   ignoreOrder: false // Enable to remove warnings about conflicting order
      // }),
      new HtmlWebpackPlugin({
        template: 'app/index.html',
      }),
      // new WorkboxPlugin.GenerateSW({
      //   // Do not precache images
      //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      //   // Define runtime caching rules.
      //   runtimeCaching: [
      //     {
      //       // Match any request that ends with .png, .jpg, .jpeg or .svg.
      //       urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      //       // Apply a cache-first strategy.
      //       handler: 'CacheFirst',

      //       options: {
      //         // Use a custom cache name.
      //         cacheName: 'images',

      //         // Only cache 10 images.
      //         expiration: {
      //           maxEntries: 10
      //         }
      //       }
      //     }
      //   ]
      // })
    ],
  };
};
