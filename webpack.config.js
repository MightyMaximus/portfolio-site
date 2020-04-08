var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(png|svg|jpg|gif|webmanifest)$/,
            use: [
                'file-loader',
            ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
        })
    ]
};
