/* global process */

var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {
  entry: './ReactWaypoint.js',
  output: {
    path: __dirname + '/build',
    filename: 'ReactWaypoint.js'
  },

  externals: {
    react: 'React'
  },

  node: {
    Buffer: false
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?optional=runtime&cacheDirectory=true'],
        exclude: /node_modules/
      }
    ]
  }
};
