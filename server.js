const express = require('express');
const app = express();
const config = require('./webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('images'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('listening at http://localhost:3000');
})
