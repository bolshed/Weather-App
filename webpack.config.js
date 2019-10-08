const path = require("path");

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.(scss$|css$)/,
                use: ["style-loader", "css-loader", "sass-loader"
                ]
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};