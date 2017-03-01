import path from 'path'
import HtmlWebpackPlugin from "html-webpack-plugin"

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js',
    
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
  contentBase: "./",
  // 動作ポート指定
  port: 3000,
  inline: true,
  },

  resolve: {
    extensions: ['*', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
        template:src + "/index.html",
        filename: "index.html"
    })
  ]
}
