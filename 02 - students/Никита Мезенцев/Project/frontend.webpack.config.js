const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CssPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    target: 'web',
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'public', 'index.js'),
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    CssPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html'),
        }),
        new CssPlugin({
            filename: 'style.css',
        })
    ]
}
