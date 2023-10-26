const path = require("path");

module.exports = function (env, argv) {
    return {
        mode: argv.mode,
        entry: "./src/index.ts",
        externals: {
            react: "react",
            reactDOM: "react-dom",
            tailwindcss: "tailwindcss",
        },
        output: {
            filename: env.cjs ? "cjs/index.js" : "esm/index.js",
            path: path.resolve(__dirname, "lib"),
            library: "$",
            libraryTarget: "umd",
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, "src"),
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: [
                        "babel-loader",
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: env.cjs
                                    ? path.resolve(__dirname, "config", "tsconfig.cjs.json")
                                    : "tsconfig.json",
                            },
                        },
                    ],
                },
            ],
        },
        devtool: "source-map",
        resolve: {
            // alias: {
            //   "@root": path.resolve(__dirname, "src"),
            // },
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
    };
};
