import express from 'express';
var app = express();
import config from './webpack.config';
import webpack from 'webpack';
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('listening at http://localhost:3000');
})
