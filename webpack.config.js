
//npm i -D html-loader html-webpack-plugin
//npm i -D webpack-dev-server
//"css-loader": "^3.6.0",
// "style-loader": "^1.3.0",
// npm "mini-css-extract-plugin": "^0.9.0",
//"optimize-css-assets-webpack-plugin": "^5.0.4",
//"file-loader": "^6.2.0",
//"copy-webpack-plugin": "^5.1.2",
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OPtimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [new OPtimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                exclude: /styles\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/styles\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {minimize: false}                
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false

        }),
        new CopyPlugin([
            { from: 'src/assets', to:'assets/' }
        ])
    ]







}