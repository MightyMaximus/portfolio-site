const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[contenthash].js',
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use:[
                process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
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
            test: /\.(jpe?g|png|gif|svg|webmanifest)$/i,
            use: [
                'file-loader',
            ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head',
            scriptLoading: 'defer'
        }),
        new MiniCssExtractPlugin({})
    ]
};
