'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './components/app',
  output: {
    filename: './prod/build.js',
    library: 'dimtrans'
  },
  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 200,
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-sourse-map' : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      query: {
          presets: ['es2015', 'react']
        }
    }],

    resolve: {
     extensions: ['.js', '.jsx']
   }
  }
};

if(NODE_ENV == 'production') {
  module.exports.plugin.push(
    new webpack.optimizeUglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      }
    });
  );
}
