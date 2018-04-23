const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development' // this is going to be the string production on heroku, the string test in the test environment (see package.json jest) and its neither of these we take development

// Remember the heroku environment variables will be set via the heroku command line interface later, so we have no production file
// since it is not even committed to the Git Repository Heroku wouldn`t have access to it
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}
// process.env.NODE_ENV

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({ // use the DefinePlugin to herunterreichen security components such as .env variables. Fill this up in firebase.js
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),

            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //'cheap-module-eval-source-map', // to see the sourcemap where the error has been made
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // tell the devServer to always serve up the index.html file for all unknown 404s
            publicPath: '/dist/'
        }
    };
};