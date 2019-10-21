const path = require ('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')

module.exports ={
    entry: path.resolve(__dirname,'src','public', 'index.js'), //точка входа
    output: {//точка выхода
        path: path.join(__dirname, 'dist/public'), 
        publicPath: '', 
        filename: 'js/bundle.js'
    },
    target: 'web', // тип сборки
    module: {
         // указания по обработке файлов для сборки
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
             },
             {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCss.loader, 'css-loader']
            }
            
         ]
    },
    plugins:[
        new MiniCss({
            filename: 'style/[name].css',
            chunkFilename: '[id].css'
            }),
        new HtmlPlugin    ({
            template: 'src/public/index.html', 
            excludeChunks: ['server'],
            filename: 'index.html'
        })

    ]
}