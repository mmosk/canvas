const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
