const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const pkgPath = path.resolve(cwd, 'package.json')
const pkg = require(pkgPath)
const mainFile = pkg.main || 'index.ts'
const entryPath = path.resolve(cwd, mainFile)
const babelOpts = getBabelOpts()

require('babel-register')({
  extensions: [ '.ts' ],
  ...babelOpts
})
module.exports = require(entryPath).default

function getBabelOpts () {
  const overridePath = path.resolve(cwd, '.babelrc')
  const overrideExists = fs.existsSync(overridePath)
  const overrideConfig = (overrideExists) ? loadConfig(overridePath) : {}

  const localConfig = getLocalConfig()

  return Object.assign({}, localConfig, overrideConfig)
}

function loadConfig (configPath) {
  return JSON.parse(fs.readFileSync(configPath).toString('utf8'))
}

function getLocalConfig () {
  return {
    presets: [
      require('babel-preset-env'),
      require('babel-preset-typescript')
    ]
  }
}
