#!/usr/bin/env node
const path = require('path')
const spawn = require('child_process').spawn

const entryFile = path.resolve(__dirname, '../index.js')
const microPath = path.resolve(__dirname, '../node_modules/.bin/micro-dev')

spawn(microPath, [ entryFile ], {
  stdio: 'inherit',
  cwd: process.cwd()
})
