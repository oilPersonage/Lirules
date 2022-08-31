const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { APP_DEFAULT_PORT } = require('./app_settings');

module.exports = async (env = {}, argv) => {
  const isDev = argv.mode !== 'production';
  return {
    entry: [
      `webpack-dev-server/client?http://localhost:${APP_DEFAULT_PORT}`,
      'webpack/hot/dev-server',
      './src/Root.tsx'
    ],
    output: {
      publicPath: isDev ? '/' : undefined,
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
    },
    devtool: 'inline-source-map',
    devServer: {
      port: APP_DEFAULT_PORT,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'Lirules - Online',
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@mocks': path.resolve(__dirname, './src/__mocks__'),
        '@src': path.resolve(__dirname, './src'),
        '@reducers': path.resolve(__dirname, './src/reducers'),
        "@components/*": path.resolve(__dirname, "./src/components/"),
        "@hooks/*": path.resolve(__dirname, "./src/hooks/"),
        "@models/*": path.resolve(__dirname, "./src/models/"),
        "@pages/*": path.resolve(__dirname, "./src/pages/"),
        "@assets/*": path.resolve(__dirname, "./assets/"),
        "@utils/*": path.resolve(__dirname, "./src/utils/"),
        "@reducers/*": path.resolve(__dirname, "./src/reducers/"),
        "@constants/*": path.resolve(__dirname, "./src/constants/"),
        "@services/*": path.resolve(__dirname, "./src/services/"),
        "@api/*": path.resolve(__dirname, "./src/api/"),
      },
      modules: [path.resolve(__dirname, 'node_modules')],
    },
  };
};
