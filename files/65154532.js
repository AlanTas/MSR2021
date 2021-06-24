const path = require('path');
const glob = require('glob');

module.exports = {
  entry: Object.fromEntries(glob.sync(path.resolve(__dirname, 'src/js/*.js')).map((v) => [
    path.basename(v, '.js'), v,
  ])),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
