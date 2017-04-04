var path = require('path');

module.exports = {

  context: path.join(__dirname, "src"),

  //define entry point
  entry: './js/main.js',

  //define output point
  output: {
      path: __dirname + "/src/",
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
      // {
      //     test: /\.scss$/,
      //     loader: 'style-loader!css-loader!sass-loader'
      // }
    ] //loaders
  }, //module

  plugins: [
  ],


  devtool: "inline-sourcemap"

};