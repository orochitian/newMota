const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        flexible: __dirname +'/src/vendors/flexible.min.js',
        main: __dirname + '/src/main.js',
        index: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.scss$/i,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            },
            {
                test: /\.(jpeg|png|gif|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '20480',
                            publicPath: '../',
                            name: 'images/[name].[ext]'
                        }
                    },
                ]
            }
        ]
    },
    plugins:[
        // new UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/index.html',
            template: 'src/index.html',
            excludeChunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'view/main.html',
            template: 'src/main.html',
            excludeChunks: ['index']
        })
    ]
}