# React之使用动画
# react-motion介绍
https://github.com/chenglou/react-motion
# 安装react-motion
$ `npm i --save react-motion @types/react-motion`

# 使用react-motion
```
import * as ReactMotion from 'react-motion'
const { 
	Motion, 
	spring,
	StaggeredMotion,
	TransitionMotion,
	presets
} = ReactMotion

export class MotionTest extends React.Component<props, state> {
	constructor(props:any){
		super(props)
	}
	render(){
		return (
			<Motion defaultStyle={{x:0}} style={{x: spring(10)}}>
				{(value:any) => <div>{value.x}</div>}
			</Motion>
		)
	}
}
```
