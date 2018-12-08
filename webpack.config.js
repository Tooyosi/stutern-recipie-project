const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js",
        path: `${__dirname}/docs`,
        // publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use:[
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjepege: {
                                progressive: true,
                                quality: 80,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
devServer: {
    historyApiFallback: true,
  },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Recipie App',
            template: 'src/template.html',
            favicvon: 'assets/favicon.ico'
        })
    ],
};

module.exports = config;