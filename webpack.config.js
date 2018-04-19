const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            loader: 'babel-loader', // Run babel everytime it sees one of your javascript files; .babelrc to set presets on which babel shall be running
            test: /\.js$/, // escape /\ and all files that ends with .js$; i.e. $ == declares the end;
            exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [ // use let us allow to use more loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', // to see the sourcemap where the error has been made
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true // tell the devServer to always serve up the index.html file for all unknown 404s
    }
};