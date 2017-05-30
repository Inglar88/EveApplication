const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, '../../src/js'),
        exclude: /node_modules/
    },{
        test: /\.json$/,
        loader: 'json',
        include: path.join(__dirname, '../../'),
        exclude: /node_modules/
    },{
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        exclude: [/node_modules/, /public/]
    },{
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less",
        exclude: [/node_modules/, /public/]
    }]
  }
};
