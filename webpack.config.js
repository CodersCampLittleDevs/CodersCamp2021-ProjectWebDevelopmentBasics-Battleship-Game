const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
    settings: path.resolve(__dirname, "./src/settings/settings.js"),
    game: path.resolve(__dirname, "./src/game/game.js"),
    authors: path.resolve(__dirname, "./src/authors/authors.js"),
    highscores: path.resolve(__dirname, "./src/highscores/highscores.js"),
    howtoplay: path.resolve(__dirname, "./src/howtoplay/howtoplay.js"),
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: (content, loaderContext) => {
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                return relativePath === "src\\variables.scss"
                  ? content
                  : '@import "src/variables.scss";' + content;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/howtoplay/howtoplay.html",
      filename: "howtoplay.html",
      inject: "body",
      chunks: ["howtoplay"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/settings/settings.html",
      filename: "settings.html",
      inject: "body",
      chunks: ["settings"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/highscores/highscores.html",
      filename: "highscores.html",
      inject: "body",
      chunks: ["highscores"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/game/game.html",
      filename: "game.html",
      inject: "body",
      chunks: ["game"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/authors/authors.html",
      filename: "authors.html",
      inject: "body",
      chunks: ["authors"],
    }),
    new MiniCssExtractPlugin(),
  ],
};
module.exports = config;
