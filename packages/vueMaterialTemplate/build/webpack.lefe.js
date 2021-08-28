const common = require("./webpack.config");
const { getPathRelativeRoot } = require("./util");

module.exports = {
  ...common,
  entry: {
    lefe: "./src/lefe/index.js",
    editorModule: "./src/lefe/editorModule.js"
  },
  output: {
    path: getPathRelativeRoot("dist/lefe"),
    filename: `index.[name].[hash].js`
  }
}