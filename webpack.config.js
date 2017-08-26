const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: getEntrySources(['bootstrap-loader', APP_DIR + '/index.js']),
    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: `bundle.js`
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
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.svg$/,
                loader: 'external-svg-sprite-loader',
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [/ignore/, /elm-stuff/]
                , loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [/ignore/, /elm-stuff/],
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [/ignore/, /elm-stuff/],
                loader: 'file'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
            fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new SvgStorePlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};
