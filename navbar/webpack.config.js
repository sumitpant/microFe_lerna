const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const path = require("path");
const { dependencies } = require("webpack");


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        port: 3002,
        liveReload: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    name: "navigation",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new ModuleFederationPlugin({
            name: "navigation",
            filename: "remoteEntry.js",
            exposes: {
                "./NavBar": "./src/NavBar.js"
            },
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
    ]

}