const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./app.js'],
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  // devtool: 'inline-source-map',
  watch: true
  // watchOptions: {
  //   ignored: '/node_modules/'
  // },
}
