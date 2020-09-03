import path from 'path';
import webpackMerge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import baseConfig from './webpack.config.base';
import pkg from './package.json';

const { library, external } = pkg.parcels;
const JS_FILE = pkg.name + '.js';
const CSS_FILE = pkg.name + '.css';
const MIN_JS_FILE = pkg.name + '.min.js';
const MIN_CSS_FILE = pkg.name + '.min.css';
const ParcelList = [{
    // 非压缩配置
    mode: 'none',
    output: {
        filename: JS_FILE,
        library,
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: CSS_FILE
        })
    ]
}, {
    // 压缩配置
    mode: 'production',
    output: {
        filename: MIN_JS_FILE,
        library,
        libraryTarget: 'umd'
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: MIN_CSS_FILE
        })
    ]
}, {
    // systemjs配置
    mode: 'none',
    output: {
        filename: pkg.name + '.system.js',
        libraryTarget: 'system'
    }
}];

export default ParcelList.map((config, index) => {
    let main = ['./src/publicPath.js', './src/index.js'];
    index < 2 && main.unshift('./src/styles/index.less');

    return webpackMerge(baseConfig(), {
        // 公共配置
        entry: {
            // js 和 css 是分离的所以分开打包
            main: main
        },
        externals: external,
        module: {
            rules: [{
                /**
                 * eslint代码规范校验
                 */
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        configFile: '.eslintrc.prod.json'
                    }
                }]
            }]
        }
    }, config);
});