var path = require('path');
var webpack = require('webpack');
// var PIXI = require('imports-loader?this=>window!./node_modules/pixi.js');

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
      },
			// {
      //   test: /pixi\.js\/dist\/pixi\.js$/,
      //   loader: 'babel-loader',
      //   query: {
      //       presets: ['es2015', 'stage-2']
      //   }
      // }
      // {
      //     test: /\.scss$/,
      //     loader: 'style-loader!css-loader!sass-loader'
      // }
    ], //loaders,
        // post-loaders:
	      rules: [
          // {
          //   test: require.resolve('pixi.js'),
          //   use: 'imports-loader?this=>window'
          // },
          // {
          //   test: require.resolve('pixi.js'),
          //   use:'exports-loader?PIXI=window.PIXI'
          // }
          // {
          //   enforce: 'post',
          //   include: path.resolve(__dirname, 'node_modules/pixi.js'),
          //   loader: 'transform-loader?brfs'
          // }
        ]
  }, //module

  plugins: [
    // new webpack.ProvidePlugin({
    // 	PIXI: "PIXI",
    // 	// "window.PIXI": "PIXI"
    // })
  ],


  devtool: "inline-sourcemap"

};