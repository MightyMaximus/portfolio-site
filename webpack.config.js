module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '',
        filename: './bundle.js'
    },
    watch: true,
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
