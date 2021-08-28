const { getPathRelativeRoot } = require("../util");

module.exports = {
  stories: [getPathRelativeRoot('src/**/*.stories.[tj]s')],
  webpackFinal: async (config, { configType }) => {
    // 编译scmp-ui中jsx编译问题
    config.module.rules.push({
      test: /\.js$/,
      loader: 'vue-loader',
      include: getPathRelativeRoot("node_modules/**")
    }, {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true,
            // sass-loader version >= 8
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ]
    });
    // Return the altered config
    return config;
  },
};