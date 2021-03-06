let WriteFilePlugin = require("write-file-webpack-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    path: "./main.js",
  },
  output: {
    path: path.join(__dirname, "../../../target/classes/static"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [new WriteFilePlugin()],
  devtool: "eval-source-map",
};
