const webpack = require('webpack');

module.exports = {
  mode:'development',
  devtool:'eval-source-map',
  devServer:{
    contentBase:__dirname + '/dist',
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
    hot:true
  },
  output:{
    path:__dirname + '/dist',
    publicPath:'/',
    filename:'main.js'           
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),    
  ]
};