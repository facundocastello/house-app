var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(css)$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'postcss-loader', ident: 'postcss'}],
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
};
