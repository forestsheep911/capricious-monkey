// config/prod.meta.js
const commonMeta = require('./common.meta')

module.exports = {
  ...commonMeta, // 继承公共配置
  // 可以在这里添加发布专属配置，例如：
  // match: [...commonMeta.match, 'https://example.com/*'], // 如果发布需要额外的 match
  // grant: [], // 如果发布需要特定的 grant
}
