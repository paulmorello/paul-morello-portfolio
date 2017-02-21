
module.exports = {
  entry: ['webpack-hot-middleware/client','./src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot','babel'],
      include: __dirname + '/src'
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpg)$/,
      exclude: /\.dp\.(png|jpg|gif)/,
      loader: 'file-loader?name=images/[name].[ext]'
    }]
  }
}
