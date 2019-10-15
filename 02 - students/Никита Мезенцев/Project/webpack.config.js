const path = require('path')

const webConf = require('./frontend.webpack.config.js')
const nodeConf = require('./backend.webpack.config.js')

module.exports = [webConf, nodeConf]
