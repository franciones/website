const path = require('path');

module.exports = {
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, 'public'),
        port: 3333
    },
    entry: './app/App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}