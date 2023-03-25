const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './app/app.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader' // will use tsconfig.json
      },
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader']
    //   }
    ]
  },
  output: {
    path: path.join(__dirname, 'build/scripts'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}