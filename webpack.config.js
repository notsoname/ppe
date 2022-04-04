const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dataRU = require("./data/langRu.json");
const dataKZ = require("./data/langKz.json");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.ejs",
    filename: "index.html",
    templateParameters: {
      json: dataRU,
      url: "",
    },
    inject: true,
    minify: false,
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.ejs",
    filename: "index-kz.html",
    templateParameters: {
      json: dataKZ,
      url: "",
    },
    inject: true,
    minify: false,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new CleanWebpackPlugin(),
];

module.exports = {
  mode,
  plugins,
  target,
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    open: true,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  stats: {
    children: true,
  },
  module: {
    rules: [
      { test: /\.html$/i, use: ["html-loader"] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
          {
            loader: path.resolve(__dirname, "./src/loaders/px_to_vw.js"),
            options: { maxWidth: "1440px", minWidth: "768px" },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.ejs$/,
        use: {
          loader: "ejs-compiled-loader",
          options: {
            beautify: true,
            htmlmin: true,
            htmlminOptions: {
              removeComments: true,
            },
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
