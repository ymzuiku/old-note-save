# 创建TypeScript React项目
**本文会一步步配置一个React的TypeScript开发环境.使用TypeScript能够很大程度上的提高开发效率,特别是当您排错的时候...**

> 本文涉及: TypeScript, Webpack, React, React-route, Webpack-dev-server

# 安装Visual Studio Code
[Visual Studio Code 官网](https://code.visualstudio.com/)
# 创建npm项目
$ `npm init`
# 安装依赖
这里包括整个项目的依赖

```
npm i --save react react-dom react-router @types/react @types/react-dom @types/react-router
npm i --save underscore @types/underscore
npm i --save-dev typescript awesome-typescript-loader source-map-loader
npm i -g webpack@1.14 webpack-dev-server@1.16.2 supervisor
```

# 创建tsconfig.json
$ `touch tsconfig.json`

./tsconfig.json 中添加::

```
{
    "compilerOptions": {
        "outDir": "./build/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react",
        "allowJs": true
    },
    "include": [
        "./**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

# 创建webpack.config.js

$ `touch webpack.config.js`

./webpack.config.js 中添加:

```
var webpack = require('webpack')
const webpackConfig = {
    entry: './src/main.tsx',
    output: {
        filename: "bundle.js",
        path: __dirname + "/build",
        publicPatch: __dirname + '/assets/'
    },
    devtool: "source-map",
    devServer:{
        inline: true,
        hot: true,
        progress: true,
        colors: true, //终端输出结果为彩色
        historyApiFallback: false  //不跳转
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}

module.exports =  webpackConfig

```

# 修改package.json以webpack-dev-server启动
设置host=0.0.0.0指所有ip都可以访问, 方便移动端测试开发
```
"scripts": {
    "web": "webpack-dev-server -d --host=0.0.0.0 --port=7000 --hot build/",
    "watch": "webpack --watch"
  },
```
到现在环境已经搭建好了, 赶快创建一个组件测试一下

# 添加项目代码测试
终端创建目录:

```
mkdir build app
touch build/index.html app/main.tsx
```

./src/index.html 中添加:

```
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no'>
	<title>Hello typescript</title>
</head>
<body>
	<div id='root'></div>
	<!-- dependencies -->
	<script src='../node_modules/react/dist/react.js'></script>
	<script src='../node_modules/react-dom/dist/react-dom.js'></script>
	<!-- main -->
	<script src='../build/bundle.js'></script>
</body>
</html>
```


./app/main.tsx 中添加:

```
//这里使用react-router对SAP应用进行跳转
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

class Test extends React.Component<undefined, undefined> {
	render(){
		return <div>Hello TypeScript</div>
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={Test}></Route>
	</Router>
), document.getElementById('root'))
```

# 如果使用git,屏蔽一些文件夹
$`touch .gitignore`

```
//.gitignore
/node_modules/*
/ios/*
/android/*
/tests/*
/build/*
```

# 启动项目
1. 监视并且打包TypeScript文件
	- $ `webpack --watch`
2. 使用webpak-dev-server运行开发服务器
	- $ `npm run web`
3. 修改./app/index.tsx中的代码,刷新页面试试是否成功

> 至此, 整个项目已经搭建完成了,好好享受TypeScript吧

# 参考资料
- [TypeScript中文](https://www.tslang.cn/docs/handbook/react-&-webpack.html)
- [详解webpack-dev-server的使用](https://segmentfault.com/a/1190000006964335)
- [react-router教程](http://blog.csdn.net/future_todo/article/details/53036638)
