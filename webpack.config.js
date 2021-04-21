const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMessages = require('webpack-messages');

const path = require('path');

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    stats: 'minimal',
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
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
            isDevelopment
              ? {
                loader: 'style-loader',
                options: {
                  sourceMap: true,
                },
              }
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
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
        logger: str => console.log(`>> ${str}`),
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment
          ? 'chunk.[id].css'
          : 'chunk.[id][hash].css',
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        components: path.resolve(__dirname, './src/components'),
        constants: path.resolve(__dirname, './src/constants'),
        containers: path.resolve(__dirname, './src/containers'),
        pages: path.resolve(__dirname, './src/pages'),
        store: path.resolve(__dirname, './src/store'),
        static: path.resolve(__dirname, './src/static'),
        api: path.resolve(__dirname, './src/api'),
      },
    },
  };
};
