// config/common.meta.js
const pj = require('../package.json')

module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: [
    'https://*.cybozu.cn/k/*',
    'https://*.cybozu.com/k/*',
    'https://*.cybozu-dev.com/k/*',
    'https://*.kintone.com/k/*',
    'https://*.s.cybozu.cn/k/*',
    'https://*.s.cybozu.com/k/*',
    'https://*.s.kintone.com/k/*',
  ],
  'run-at': 'document-idle',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  icon: 'https://img.icons8.com/ios/50/000000/happy-eyes.png',
}
