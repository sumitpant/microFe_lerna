const path = require("path");
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("webpack");

module.exports={
    name:'cart',
    entry:"./src/index.js",
    mode:"development",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    devServer:{
        port:3005,
        liveReload: true,
        historyApiFallback:true
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
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./Cart":"./src/Cart.js"
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