//기본적으로  NodeJS의 파일임, Node문법을 사용하여야 함
/**
 * webpack.config.js의 구조
 * 기본적으로 webpack에 입력 값으로 config파일을 제공해주는 역할을 함
 * webpack이 필요한 스펙 형태대로 객체를 Export 해주어야 함
 */

//entry -> Module의 소프트웨어에 ectry값을 넘겨줌, Transpile 진행 -> 
//변환된 파일을 plugin에 넘김 -> 최종적으로 output파일
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {//Export의 모양은 webpack에서 가이드를 해주고 있음
    mode: 'development',
    entry: './src/app.js',//입력 정보, 어떤 JavaScript파일에서 시작
    output: {//출력 정보, 여러가지 정보가 필요하여 객체로 정의
        path : path.resolve(__dirname, 'dist')/*현재디렉토리 상수(NodeJS 지원)*/, //디렉토리 위치
        filename : 'bundle.js'// 파일 이름
    },
    devServer: {
        compress: true,
        port: 9999
    },
    module: {
        rules: [
            {
                test: /\.js$/,//확장자가 js인 파일들, 필요없는 파일 제거하는 속성
                exclude: /node_modules/, //제외 디렉토리
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins:[//주석이나 console을 제거해주는 plugin 등
        new htmlWebpackPlugin({
            title : '2.3 Setup Webpack & Babel',
            template : 'index.html'
        })
    ]
}