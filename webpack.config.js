const path = require('path')
const globalConfig = require('./app/config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
})

// 向less loader传的值, 用于覆盖less源文件中的变量
// 有个小问题就是这个变量只会初始化一次, 不会随globalConfig的变化而变化
// 所以在webpack-dev-server中调试时, 热加载有点问题, 不能实时更新
const lessLoaderVars = {
  sidebarCollapsible: globalConfig.sidebar.collapsible,
};

module.exports = {
  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
  entry: [
    './app/index.js'
  ],
  devtool: 'source-map',
  // output 是放入產生出來的結果的相關參數
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  // resolve: {
  //   modulesDirectories: ['node_modules', './app'],  // import时到哪些地方去寻找模块
  //   extensions: ['', '.js', '.jsx'],  // require的时候可以直接使用require('file')，不用require('file.js')
  //   alias: {
  //     antdcss: 'antd/dist/antd.min.css',  // import时的别名
  //   }
  // },
  module: {
    // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.less$/,//正则匹配拓展名为···的文件
        // include: path.join(__dirname, './src/css'),//需要被加载文件的路径
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=25000',  // 图片小于一定值的话转成base64
      }
    ]
  },
  // devServer 則是 webpack-dev-server 設定
  devServer: {
    inline: true,
    port: 8008
  },
  // plugins 放置所使用的外掛
  // plugins: [HTMLWebpackPluginConfig],
  plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin('index.css')]
}