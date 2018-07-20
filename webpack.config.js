const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,"public"),
    filename: "dev_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename:"index.html",
      inject: "body"
    })
  ]
};

module.exports = config;

//push rules
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        plugins: [
          "babel-plugin-transform-class-properties",
          "babel-plugin-syntax-dynamic-import",
          [
            "babel-plugin-transform-runtime",
            {
              helpers: true,
              polyfill: false, // we polyfill needed features in src/normalize.js
              regenerator: true
            }
          ],
          [
            "babel-plugin-transform-object-rest-spread",
            {
              useBuiltIns: true // we polyfill Object.assign in src/normalize.js
            }
          ]
        ],
        presets: [
          "babel-preset-react",
          [
            "babel-preset-env",
            {
              modules: false,
              targets: {
                ie9: true
              },
              uglify: true
            }
          ]
        ]
      }
    }
  ]
});
