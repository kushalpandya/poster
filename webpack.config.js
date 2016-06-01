/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 01 June, 2016
 * License: MIT
 *
 * Webpack Configuration
 */

var webpack = require('webpack'),
    debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname + "/app",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: [
                        'react-html-attrs',
                        'transform-class-properties',
                        'transform-decorators-legacy'
                    ]
                }
            }
        ]
    },
    output: {
        path: __dirname + "/app",
        filename: "app.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};
