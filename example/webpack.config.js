// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (env, options) => {
  const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";
  return {
    entry: "./src/index.jsx",
    mode: isProduction ? "production" : "development",
    output: {
      clean: true,
      path: path.resolve(__dirname, "dist"),
      filename: isProduction
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/[name].js",
      chunkFilename: isProduction
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/[name].js",
    },
    devServer: {
      open: true,
      compress: true,
      host: "localhost",
    },
    plugins: [
      isProduction &&
        new CopyWebpackPlugin({
          patterns: [
            {
              from: "./public",
              noErrorOnMissing: true,
              filter: (filename) =>
                filename !== path.resolve(__dirname, "public/index.html"),
            },
          ],
        }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      isProduction && new MiniCssExtractPlugin(),

      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          loader: "babel-loader",
          exclude: ["/node_modules/"],
        },
        {
          test: /\.scss$/i,
          use: [
            stylesHandler,
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                // `dart-sass` 是首选
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [stylesHandler, "css-loader", "postcss-loader"],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.module\.css$/,
          use: [
            stylesHandler,
            {
              loader: "css-loader",
              options: { importLoaders: 1, modules: { mode: "local" } },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset",
        },

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve("src"),
        "@style": path.resolve("src/style"),
      },
    },
  };
};
