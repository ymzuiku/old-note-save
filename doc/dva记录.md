#创建项目
```
$ dva new projectName
$ npm i babel-plugin-import rc-tween-one rc-banner-anim rc-animate rc-queue-anim rc-scroll-anim --save
```

#创建页面
创建路由地址 `$ dva g route users`
然后创建model `$ dva g model usersModel`, 此时会在model下添加一个usersModel
然后在index.js中激活刚刚的model `app.model(require('./models/usersModel'));`

#个人使用方式
##尝试摒弃它自带的redux,把model和services删除
##相当于只用它的react模块
