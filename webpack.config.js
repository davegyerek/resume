const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://127.0.0.1:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}

module.exports = {
    entry: getEntrySources([
        'font-awesome-webpack!./font-awesome.config.js',
        'bootstrap-loader',
        APP_DIR + '/index.js'
    ]),
    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: "bundle-[hash].js"
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loaders: ['react-hot-loader/webpack', 'jsx', 'babel'],
            },
            {
                test: /\.s?css$/,
                // loader: ExtractTextPlugin.extract('css!sass')
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader', {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // Specifying webp here will create a WEBP version of your JPG/PNG images
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Balina Bálint - Resume',
        }),
        new ExtractTextPlugin('style-[contenthash].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
            fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
            $: "jquery",
            jQuery: "jquery"
        }),
        new SvgStorePlugin()
    ],
    devServer: {
        historyApiFallback: true
    }
};
