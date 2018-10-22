const path = require('path');

const config = {
  context: __dirname,
  entry: "./frontend/root.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
    }]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: 'source-map',

};

module.exports = config;
