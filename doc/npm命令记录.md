# npm命令记录
# 添加altas,设置cnpm
```
alias cnpm="npm --registry=https://registry.npm.taobao.org \
```

# 设置npm配置文件
```
open ~/.npmrc
```
# 新建npm项目
```
npm init
```
# npm安装包
```
npm install (根据npm的package.js文件配置安装)
npm i (简写install)
npm i <包名1><包名2> (安装单个,多个包)
npm i -g <包名> (安装到npm全局)
npm i <包名> (安装到当前目录,匿名安装)
npm i --save <包名> (安装到当前目录)
npm i --save-dev <包名> (安装到当前目录,开发用,最后
并不打包输出)
```
# npm删除包
```
npm uninstall
```
# npm发布包

先去[www.npmjs.com](http://www.npmjs.com)官网注册账号

```
npm adduser (添加账号)
npm whoaml (查看当前账号)
npm version patch (把版本从1.0.0升级到1.0.1)
sudo npm publish (发布到npmjs.org)
[发布过程可能遇到的问题](https://segmentfault.com/a/1190000006250554)
```
# npm link
npm link 同步开发npm包的必要功能,
首先在当前包中使用npm link,把包链接到全局中,
再在项目中使用npm link <包名>,把全局包链接到项目中.
此时,修改开发包中的代码, 项目可以动态读取

```
npm link (把当前项目链接到全局目录中)
npm link <包名> (把全局项目链接到当前目录中)
npm unlink (关闭link)
```

# 开发node命令行,配合npm
安装shelljs和yargs

```
npm i -g shelljs
npm i -g yargs
```

常用命令

```
require('shelljs/global')
var argv = require('yargs').argv

cd('aaa')
mkdir('-p', 'out/Release');
cp('R', 'stuff/*', 'out/Rele')
exec('npm install')
exec('ls')

function shellLs (str) {
	ls(str).forEach(function(file) {
		console.log(file)
	})
}
```
可以直接参考这些篇文章:

[阮一峰:Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)

[从零开始打造个人专属命令行工具集——yargs 完全指南](https://linux.cn/article-7725-1.htmls)