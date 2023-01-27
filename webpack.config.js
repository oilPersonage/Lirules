const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const { APP_DEFAULT_PORT } = require('./app_settings');

module.exports = async (env = {}, argv) => {
  const isDev = argv.mode !== 'production';
  return {
    entry: [
      `webpack-dev-server/client?http://localhost:${APP_DEFAULT_PORT}`,
      'webpack/hot/dev-server',
      './src/Root.tsx',
    ],
    output: {
      publicPath: isDev ? '/' : undefined,
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
    },
    devtool: 'eval-source-map',
    mode: isDev ? 'development' : 'production',
    devServer: {
      port: APP_DEFAULT_PORT,
      hot: true,
      proxy: {
        '/': 'http://localhost:3000/api/',
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('ts-loader'),
              options: {
                getCustomTransformers: () => ({
                  before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            {
              loader:
                process.env.NODE_ENV !== 'production'
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader,
            },
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
            },
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'Lirules - Online',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
      // isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@mocks': path.resolve(__dirname, 'src/__mocks__'),
        '@src': path.resolve(__dirname, 'src'),
        '@reducers': path.resolve(__dirname, 'src/reducers'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@styles': path.resolve(__dirname, 'assets/styles'),
        '@images': path.resolve(__dirname, 'assets/images'),
        '@icons': path.resolve(__dirname, 'assets/icons'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@api': path.resolve(__dirname, 'src/api'),
        app_settings: path.resolve(__dirname, 'app_settings.js'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, 'node_modules')],
    },
  };
};
