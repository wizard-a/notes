const path = require('path');

// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: [
            './app.js'
        ],
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
        plugins: [
            // new CleanWebpackPlugin(['dist']),
            // new HtmlWebPackPlugin({
            //     template: "./public/index.html",
            //     filename: "./index.html"
            // }),
            // new MiniCssExtractPlugin({
            //     filename: "[name].css",
            //     chunkFilename: "[id].css"
            // })
        ]
    }
};