const path = require('path'),
 TerserPlugin = require('terser-webpack-plugin'),
 HtmlWebpackPlugin = require('html-webpack-plugin'),
 MiniCssExtractPlugin = require('mini-css-extract-plugin'),
 environment = process.env.NODE_ENV || 'development',
 postCss = require('postcss-preset-env'),
 cssNano = require('cssnano');

const VENDOR_LIBS = [
  '@babel/polyfill',
  'lodash',
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-router-dom',
  'react-router-redux',
  'prop-types'
],

 config = {
    name: 'js',
    entry: {
        vendor: VENDOR_LIBS,
        app: './public/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'build.[name].[chunkhash].js',
        chunkFilename: 'build.[name].chunk.[chunkhash].js',
        publicPath: environment !== 'production' ? '/' : '/build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: 'eslint-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                 test: /\.styl$/,
                 use: [
                    {
                      loader: MiniCssExtractPlugin.loader
                    },
                    {
                      loader: 'css-loader',
                      query: {
                        minimize: true,
                        sourceMap: false
                      }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                              postCss(),
                              cssNano()
                            ]
                        }
                    },
                    'stylus-loader'
                    ]
              },
              {
                  test: /\.(png|woff|woff2|otf|eot|ttf|svg|jpg|jpeg|gif)$/,
                  loader: 'file-loader'
              }
        ]
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 1000,
        minChunks: 2,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          default: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      },
      runtimeChunk: {
        name: 'manifest'
      }
    },
    performance: {
      hints: false
    },
    mode: environment,
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'build.[name].[hash].css',
          chunkFilename: 'build.[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
          template: 'public/templates/index.html',
          filename: environment !== 'production' ? 'index.html' : '../index.html',
          minify: {
            collapseWhitespace: true,
            preserveLineBreaks: true
          }
        })
    ]
};

if (environment === 'production') {
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false
          }
        }
      })
    ];
}


module.exports = config;
