const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.vue$/, loader: "vue-loader", exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
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
      },
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?j|gif|svg)(\?.*)?$/, loader: 'url-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'url-loader' }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    minimize: true
  }
}