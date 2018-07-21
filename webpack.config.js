const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
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
      title: "tax-app",
      filename: "index.html",
      template: "./public/index.html",
      inject: "true"
    })
  ]
};

module.exports = config;

//Push Rules
//Js-Jsx Files
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
              polyfill: false,
              regenerator: true
            }
          ],
          [
            "babel-plugin-transform-object-rest-spread",
            {
              useBuiltIns: true
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

// Images
config.module.rules.push({
  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  loader: "url-loader?limit=100000"
});
