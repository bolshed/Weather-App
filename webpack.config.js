module.exports = {

    // entry: "./src/js/index.js",
    // output: {
    //     path: path.resolve(__dirname, "dist"),
    //     filename: "main.js",
    //     publicPath: "/dist"
    // },

    module: {
        rules: [
            {
                test: /\.(scss$|css$)/,
                use: ["style-loader", "css-loader","sass-loader"
            ]
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};