const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: `https://github.com/${pj.author}/${pj.name}`,
  match: ['https://*.wikipedia.org/*'],
  grant: ['GM_addValueChangeListener'],
  require: [`file://D:/dev/github/tamper-vscode-test/dist/${pj.name}.dev.user.js`],
}
