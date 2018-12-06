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
                            optpng: {
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Recipie App',
            template: 'src/template.html'
        })
    ],
};

module.exports = config;