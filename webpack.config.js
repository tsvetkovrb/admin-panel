const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name][hash].js',
  },
  stats: 'minimal',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: '/.html$/',
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /.(png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.(scss|css)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new WebpackMessages({
      name: 'client',
      // eslint-disable-next-line
      logger: str => console.log(`>> ${str}`)
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      containers: path.resolve(__dirname, './src/containers'),
      pages: path.resolve(__dirname, './src/pages'),
      store: path.resolve(__dirname, './src/store'),
      static: path.resolve(__dirname, './src/static'),
    },
  },
};
