## 调用子组件方法:

## 给组件设置ref
`
<IButton ref='iMac' {...topbarcss}>iMac</IButton>
`

## 使用refs调用子组件, 推荐使用字符串的方法
`
this.refs['iPad'].setSeleted(true)
this.refs.iMac.setSeleted(true);
`