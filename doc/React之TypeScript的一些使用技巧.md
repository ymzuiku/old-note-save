# React之TypeScript的一些使用技巧
首先,使用TypeScript首选VScode
# interface 继承HtmlProps
```
interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
export class View extends React.Component<IProps, {}> {}
```
这样才可以拥有Html元素的interface

# Object.assign()
```
//TypeScript没有实现这个ES6新加入的方法, 我们可以转换为any属性,直接使用, 这样ts编译成js之后,还是可以使用assign方法
//当然这样会有es6兼容问题,这里只是提供一个思路
let a = {a1:'a1', a2:'a2'}
let b = {b1:11, b2:22}
let c = (Object as any).assign(a, b);
```

# 考虑兼容性可以自己定义一个assign()方法
```
assign(target:any, firstSource:any) {
		if (target === undefined || target === null) return null
		var to = Object(target);
		for (var i = 1; i < arguments.length; i++) {
			var nextSource = arguments[i];
			if (nextSource === undefined || nextSource === null) continue;
			var keysArray = Object.keys(Object(nextSource));
			for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
			var nextKey = keysArray[nextIndex];
			var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
			if (desc !== undefined) to[nextKey] = nextSource[nextKey];
			}
		}
		return to;
	}
```

# 一个组件的标准写法

```
import * as React from 'react'

interface IProps extends React.HTMLProps<HTMLElement> {}
interface IState {}

export class Show extends React.Component<IProps, IState> {
	static defaultProps = {};
	constructor(props:IProps){
		super(props)
		this.state = {}
	}
	componentWillMount(){}
	render(){
		return (
			<div {...this.props}>{this.props.children}</div>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}```