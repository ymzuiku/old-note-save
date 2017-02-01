#react-kua:基于Web的跨平台方案

[English Readme](./README.md)

# 初衷
大部分应用的功能只有两个:

1. 呈现内容给用户
2. 用户浏览内容过程中输入信息

如果是这样,程序的性能要求就不是很高.
优化过的web,其实可以达到Native的效果.
我们可以用手机看看React-Motion中的Demo,这是没有针对移动端优化的,我们只看动画性能如何:

- [Draggable List](http://chenglou.github.io/react-motion/demos/demo8-draggable-list/)
- [TodoMVC List Transition](http://chenglou.github.io/react-motion/demos/demo3-todomvc-list-transition/)

### 这里我们要规避几个高性能消耗的的地方:

- 谨慎使用非Transfrom动画,例如模糊,阴影,透明的等等.
- 长列表中的cell不要过于复杂, 复杂的cell即便是Native中也是需要性能集中优化的地方

### 我们还要让Web页面更像App

- 屏蔽双击放大网页
- 屏蔽iOS-WebView中的选中Html元素的额外颜色效果
- 屏幕长按选择非纯文本内容的文字,例如按钮中的文字,在Moblie中是不可以框选的
- 非ScrollView\ListView\TableView类型的页面,不可随意滚动
- 屏蔽网页左右滚动
- 屏蔽MouseMove事件
- 针对Touch事件,做设计,例如按钮的点击效果
- 添加一些通用手势,例如长按,拖动元素等

### 如果需要在应用市场上架

- 制作一个没有地址栏, 布满全屏的WebView的iOS和Android应用
- 启动加载页面改为黑色, 在web中模拟启动加载
- 未来不同的应用,只要替换不同的url即可
- 尽量不要使用内付费的设计

### 和传统Phonegap, APICloud之流有什么区别?
Phonegap和APICloud的目的都是一样的:使用Web嵌入在移动端, 从而缩减开发时间.

相对于他们,ReactNative远比他们更出色, 更好的性能, 同样的开发成本, ReactNative>APICloud>Phonegap.

而我的初衷是跨平台,并不是缩减移动端开发时间.
目的是一套代码在PC程序,MacApp,移动Web(微信),iOSApp,AndroidApp都可以使用,并且要缩减打包成本.此时ReactNative就无法达到目的,它只能开发iOS和Android.

所以Kua的目的是多端适配,其理念是指定一个通用规范,让设计师在此规范下进行多端设计,并最终使用Kua实现多平台.所以我现在选择了React, 而不是ReactNative.

### 选择Web的长期收益
未来任何一个设备都可以运行浏览器, 而呈现内容的性能随着设备性能的提高逐步不会是问题, 所以Web有可能是UI的最终寄主.

# 主角kua
GitHub:[https://github.com/ymzuiku/react-kua](https://github.com/ymzuiku/react-kua)

kua是一个基于react的跨平台**集成方案**, 思路是让移动端和pc端使用同一套代码, 适配同样的设计.这一切都是基于web.
因为相信Web是最终跨平台解决方案.

Kua现在框架和相关开发包都已经配置好了,正在完善里面的UI系统, 当然你也可以直接使用, 作为TypeScript React的Start工具.

# Install
```
npm i -g react-kua-cli
```
# Create project
```
mkdir projectName & cd projectName
npm init
```

# Use
```
kua web
```

![](markdownImage/2017-01-31-17-02-39.png)

# 用到的包
- 语言使用typescript
- 打包工具使用webpack
- 开发服务器使用webpack-dev-server
- UI框架使用react
- UI组件使用react-ymui-kit
- 路由使用react-router
- 动画使用react-motion

# 关于react-ymui-kit(还未完善,填坑中)
kua提供一套UI组件, 使用此组件达到跨平台的目的
react-ymui-kit设计理念分为三个层级:

## 1. basic, 基础层级
适配移动端的触碰操作, 设计移动和web通用的基础控件

## 2. design, 设计层级
使用basic控件, 和一套设计语言设计带设计的基础控件.
design层可以有多个分支,根据不同的项目,业务的需要使用不同风格的控件

## 3. fit, 组装层级
应用层, 应用层会使用design控件, 完成一些最终可以直接使用的复杂控件, 例如导航栏, 时间选择器等等

## 扩展性
- 根据未来不同的平台, 适配更多平台的basic组件
- 根据basic层, 可以扩展多个design分支
- 完善更多的fit组件, 并且fit组件输入不同的design分支, 可以得到全新的视觉

# 关于tool
tool是kua提供一系列糖果类小工具

# 为什么用TypeScript?
有了类型检测, 我们能够更加安全,快速的进行JavaScript开发.

特别是配合VScode, 如图:

- 如图, 识别Html css
![如图, 识别Html css](https://github.com/ymzuiku/react-kua/blob/master/markdownImage/2017-01-31-16-20-31.png)
- react的箭头函数中识别Props
![react的标签中识别Props](markdownImage/2017-01-31-16-45-58.png)