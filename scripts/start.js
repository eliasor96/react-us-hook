process.env.NODE_ENV = 'development';
process.on('unhandledRejection', err => {
  throw err;
});

const PORT = 8080;

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config.dev.js');

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  watchOptions: {
    ignored: /node_modules/,
  },
});

devServer.listen(PORT, (err, result) => {
  if (err) {
    return console.log(err);
  }
});
