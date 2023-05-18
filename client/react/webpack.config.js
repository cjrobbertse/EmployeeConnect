const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
      watch: true,
    },
    hot: true,
    port: 3001,
    historyApiFallback: true,
    open: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /bundle\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        use: [
          {
            loader: require.resolve("url-loader"),
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), "public/assets/images"),
          to: "assets/images",
        },
      ],
    }),
  ],
};
