const path = require("path");

// Bumdle Analyzer
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    entry: path.resolve(__dirname, "develop") + "/index.js",
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "public"), // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js", // название создаваемого файла
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: false,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        modules: ["node_modules", "develop", "localization"],
    },
    plugins: [new BundleAnalyzerPlugin({ analyzerPort: 9999 })],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: "babel-loader", // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"], // используемые плагины
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
};
