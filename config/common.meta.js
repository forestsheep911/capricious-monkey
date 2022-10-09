const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: `https://github.com/${pj.author}/${pj.name}`,
  version: '0.0.1',
  description: '',
  author: 'boccaro',
  copyright: 'boccaro',
  license: 'MIT',
  match: ['https://*.wikipedia.org/*'],
  'run-at': 'document-start',
  supportURL: '',
  homepage: '',
  grant: ['GM_addValueChangeListener'],
  icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-wiki-productivity-flaticons-lineal-color-flat-icons-5.png',
}
