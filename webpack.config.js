const path = require("path");
const loader = require("sass-loader");
module.exports = {
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // 輸出
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'eval-source-map',
  watch:true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      }
    ],
  },
  //DevServer
  devServer: {
    static: "./dist",
    historyApiFallback: true,  
  },
  resolve: {
    alias: {
      '@mui/base': '@mui/base/legacy',
      '@mui/lab': '@mui/lab/legacy',
      '@mui/material': '@mui/material/legacy',
      '@mui/styled-engine': '@mui/styled-engine/legacy',
      '@mui/system': '@mui/system/legacy',
      '@mui/utils': '@mui/utils/legacy',
    }
  }
};
