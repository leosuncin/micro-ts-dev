const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const pkgPath = path.resolve(cwd, 'package.json')
const pkg = require(pkgPath)
const mainFile = pkg.main || 'index.ts'
const entryPath = path.resolve(cwd, mainFile)
const babelRcPath = path.resolve(cwd, '.babelrc')
const babelRcExists = fs.existsSync(babelRcPath)
const babelOpts = (!babelRcExists)
  ? JSON.parse(fs.readFileSync(path.resolve(__dirname, './.babelrc')).toString('utf8'))
  : {}

require('babel-register')({
  extensions: [ '.ts' ],
  ...babelOpts
})
module.exports = require(entryPath).default
