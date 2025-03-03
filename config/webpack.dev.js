// config/webpack.dev.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { baseOptions, getBanner } = require('./webpack.config.base')
const devMeta = require('./dev.meta') // 使用新的 dev.meta.js
const fs = require('fs')

const outputPath = path.resolve(__dirname, '../dist/dev')
const monkeyHeader = `${devMeta.name}.header.js`

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) return true
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}
ensureDirectoryExistence(`${outputPath}/dummy`)
fs.writeFile(path.join(outputPath, monkeyHeader), getBanner(devMeta), () => {})

module.exports = () => {
  baseOptions.output.path = outputPath
  baseOptions.output.filename = `${devMeta.name}.script.js`
  baseOptions.plugins.push(
    new webpack.BannerPlugin({
      banner: getBanner(devMeta), // 使用开发配置
      raw: true,
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: false,
      FILENAME: JSON.stringify(`${devMeta.name}.script.js`),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  )
  baseOptions.devServer = {
    static: [{ directory: path.join(__dirname, '../public') }, { directory: path.join(__dirname, '../dist') }],
    compress: true,
    port: 8864,
    hot: false,
    open: true,
    liveReload: true,
    watchFiles: ['src/**/*', 'public/**/*'],
  }
  baseOptions.mode = 'development'
  return baseOptions
}
