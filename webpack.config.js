var path = require('path');

module.exports = {

  context: path.join(__dirname, "app"),

  entry: './js/main.js',

  output: {
    path: __dirname + "/app/",
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ],
    // post-loaders etc
    rules: []
  },

  plugins: [],

  devtool: "inline-sourcemap"

};