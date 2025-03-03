// config/webpack.prod.js
const { resolve } = require('path')
const webpack = require('webpack')
const prodMeta = require('./prod.meta') // 使用新的 prod.meta.js
const { baseOptions, getBanner } = require('./webpack.config.base')

module.exports = () => {
  baseOptions.output.filename = `${prodMeta.name}.js`
  baseOptions.output.path = resolve(__dirname, '../dist/store')
  baseOptions.plugins.push(
    new webpack.BannerPlugin({
      banner: getBanner(prodMeta), // 使用生产配置
      raw: true,
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: true,
    }),
  )
  baseOptions.mode = 'production'
  return baseOptions
}
