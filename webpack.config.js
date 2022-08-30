const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsChecker = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production';
const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index.js',
  target: 'browserslist',
  devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(srcPath, './index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new tsChecker(),
    new VueLoaderPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    clean: true,
    publicPath: isProd ? './' : '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                autoprefixer({
                  grid: 'autoplace',
                  flexbox: "no-2009"
                })
              ]
            }
          }
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          !isProd 
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    grid: 'autoplace',
                    flexbox: "no-2009"
                  })
                ]
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          !isProd 
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[path][name]__[local]'
                },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    grid: 'autoplace',
                    flexbox: "no-2009"
                  })
                ]
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.vue?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'vue-loader',
        }
      },
    //  {
    //    test: /\.tsx?$/,
    //    use: 'ts-loader',
    //    exclude: /node_modules/,
    //  },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },   
    ],
  },
  resolve: {
    //extensions: ['.vue'],
    alias: {
        'vue': '@vue/runtime-dom',
        //components: path.join(srcPath, 'components'),
        //assets: path.join(srcPath, 'assets'),
        //pages: path.join(srcPath, 'pages'),
        //store: path.join(srcPath, 'store'),
        //api: path.join(srcPath, 'api'),
        //styles: path.join(srcPath, 'styles'),
        //view: path.join(srcPath, 'view'),
        //helpers: path.join(srcPath, 'helpers'),
        //hooks: path.join(srcPath, 'hooks'),
        //routes: path.join(srcPath, 'routes'),
    }
  },
};