const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("./package.json");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    library: pkg.name,
  },
  performance: {
    maxEntrypointSize: 912000,
    maxAssetSize: 912000,
  },
  devtool: false,
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  plugins: [],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes",
    },
  },
};
