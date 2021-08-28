const common = require("./webpack.config");
const { getPathRelativeRoot } = require("./util");

module.exports = {
  ...common,
  entry: {
    common: "./src/common/index.js"
  },
  output: {
    path: getPathRelativeRoot("dist/common"),
    filename: `index.[name].js`,
    libraryTarget: "commonjs",
    libraryExport: "default"
  }
}