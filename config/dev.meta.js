// config/dev.meta.js
const pj = require('../package.json')
const { resolve } = require('path')
const commonMeta = require('./common.meta')

module.exports = {
  ...commonMeta, // 继承公共配置
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`, // 覆盖 namespace
  match: [
    ...commonMeta.match, // 继承并扩展 match
    'http://localhost:8864', // 开发专属 match
  ],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener'], // 开发专属 grant
  require: [`file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`], // 开发专属 require
}
