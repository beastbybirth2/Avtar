const path = require('path');

module.exports = {
  entry: './views/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'views')
  }
};
