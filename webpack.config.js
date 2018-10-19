
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//通过node中的模块操作，向外暴露一个配置对象
module.exports = {
    mode: "development",
    //入口文件  表示要使用webpack打包那个文件
    entry: path.join(__dirname, './src/index.js'),
    //输出文件  表示的是将打包好的文件输出到哪个目录中去
    output: {
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'main.js'
    },
    //所有webpack插件配置节点
    plugins: [
        //创建一个在内存中的生成的html插件
        new htmlWebpackPlugin({
            //指定路径
            template: path.join(__dirname, './src/index.html'),
            //生成内存页面的名称
            filename: 'index.html'
        })
    ],
    //这是配置所有第三方loader模块的
    module: {
        //匹配第三方模块的规则
        rules: [
            //处理css文件的loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|jpg|gif|jpeg|bmp)$/, use: 'url-loader?limit=3732&name=[name].[ext]'},
            {test:/\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test:/\.(ttf|woff2|woff|eot|svg)$/, use: 'url-loader'},
            {test:/\.vue$/, use: 'vue-loader'},
        ]
    },
    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.js'
        }
    }
};