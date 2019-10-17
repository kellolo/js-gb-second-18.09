const path = require('path')
const nodeExternals = require('webpack-node-externals')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: [nodeExternals ()],
    devtool: 'source-map',
    mode: isProd ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'server', 'server.js'),
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                type: 'javascript/auto',
                loader:'file-loader',
                exclude: /node_modules/,
                options: {
                    name: 'db/[name].[ext]',
                }
            }
        ]
    },
}
