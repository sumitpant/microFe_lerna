const path = require("path");
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("webpack");

module.exports = {
    name: "main",
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        port: 3001,
        liveReload: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new ModuleFederationPlugin({
            name: "main",
            filename: "remoteEntry.js",
            remotes: {
                navigation: "navigation@http://localhost:3002/remoteEntry.js"
            },
            exposes: {},
            shared: {
                "react": {
                    singleton: true,
                    requiredVersion: dependencies.react,
                    eager: true
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                    eager: true
                },

            }
        })
    ],

}
//http://localhost:3002"