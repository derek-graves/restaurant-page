const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
