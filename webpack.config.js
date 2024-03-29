const path = require("path");

module.exports = {
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")]
  },
  entry: ["babel-polyfill", "renderers/dom.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }]
  }
};
