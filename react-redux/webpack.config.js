const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = '/';

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/main.jsx')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js',
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'util': path.resolve(__dirname, 'src/util')
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader']
            })
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svgz)(\?.+)?$/,
            exclude: /favicon\.png$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }, {
            test: /.svg$/,
            use: [{
                loader: 'file-loader'
            }]
        }, {
            test: /.html$/,
            use: [{
                loader: 'html-loader'
            }]
        }]
    },

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: __dirname + '/index.html',
            chunk: ['app']  // chunks 选项的作用主要是针对多入口(entry)文件
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // postcss
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => {
                    return [
                        require('autoprefixer')()
                    ]
                }
            }
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify('dev')
        }),

        // 抽离css
        new ExtractTextPlugin('[name].min.css')
    ],

    devServer: {
        port: 5000,
        proxy: {
            '/api': {
                // 下面这个 target 的地址，如果直接写域名(例如 localhost)报错，那么就换成 ip
                target: 'http://127.0.0.1:3000',
                secure: false,
                changeOrigin: true
            }
        },
        historyApiFallback: true,
    }
}