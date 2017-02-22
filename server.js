const express = require('express');
const app = express();
const config = require('./webpack.config');
const webpack = require('webpack');
const compiler = webpack(config);
var port = process.env.PORT || 3030

app.use(require('webpack-dev-middleware')(compiler, {}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('listening at http://localhost:3030');
})
