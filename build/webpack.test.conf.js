module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    alias: {},
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {esModules: true}
        },
        enforce: 'pre',
        exclude: /node_modules|test/
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['istanbul']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
