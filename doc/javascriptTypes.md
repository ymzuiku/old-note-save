# Javascript 继承最佳实践
约定：返回必须是单纯数据类型，对象的所有属性都必须直接包含其中，例如：
```
let child = {
	a:1,
	b:2,
	c(){console.log('the func')}
}
```
好处：
1. 编辑器可以识别所有属性，方便开发
2. 可预期对象的结果

# 属性结构的类
思路取自阮一峰的[Javascript定义类（class）的三种方法](http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)中的第三个方法，添加了方法重载的实现方式，并且返回类型约定为IDE容易识别的结构形态
### 最基础的类，和其实例化、调用函数

```
let Dog = {
	init(){
		let child = {
			name: 'the dog',
			say(){
				console.log('Wang!Wang!!!')
			}
		}
		return child
	}
}
let dog = Dog.init()
dog.say()
```

### 带有静态变量的类

```
let Dog = {
	staticAge: 10,
	init(name){
		let _this = this
		let child = {
			name: name || 'the dog',
			say(){
				console.log(`I'm ${_this.staticAge}, ${child.name}`)
			}
		}
		return child
	}
}
let dog1 = Dog.init('red')
let dog2 = Dog.init('yellow')
let dog3 = Dog.init('bbb')
dog1.say()
dog2.say()
Dog.staticAge = 20
dog1.say()
dog2.say()
```

### 类的继承， 方法重载， 子属性，父属性调用

```
let Dog = {
	init(name){
		let child = {
			name: name || 'the dog',
			say(){
				console.log('Wang!Wang!!!')
			}
		}
		return child
	}
}

let WolfDog = {
	init(name, age) {
		let father = Dog.init(name)
		let child = {
			name: 'mini ' + name,
			age: age || 10,
			say(){
				//函数重载
				father.say()
				console.log('Wooooooo!!!')
			},
			hello(){
				//读取子熟悉和父属性
				console.log(`I'm ${child.name}, my father's is ${father.name}`)
			}
		}
		return Object.assign(Dog.init(name), child)
	}
}

let wolf = WolfDog.init('tim', 50)
wolf.say() //Wang!Wang!!! Wooooooo!!!
wolf.hello() //I'm mini tim, my father's is tim
```

# 方法结构的类(优势写起来美观，但是不推荐，原因最后有写)
这个思路和属性结构的类是一样的，都是在内部创建一个临时的子对象，然后返回此子对象


> 约定：类的首字母必须大写，以区分类和函数

### 类的创建，实例化，调用函数
```
let Dog = function(name) {
	let _this = this
	let child = {
		name: name || 'the Dog',
		say(){
			console.log(child.name + ': wang!wang!!!')
		}
	}
	return child
}

let dog1 = Dog('redDog')
let dog2 = Dog('yelloDow')
dog1.say()  //redDog: wang!wang!!!
dog2.say()  //yelloDow: wang!wang!!!
```

### 类的静态属性
```
let Dog = function(name) {
	this.staticAge = 10
	let _this = this
	let child = {
		name: name || 'the Dog',
		say(){
			console.log(child.name + ': wang!wang!!!')
			console.log('I am ' + _this.staticAge)
		},
		setStaticAge(newAge) {
			_this.staticAge = newAge
		}
	}
	return child
}

let dog1 = Dog('redDog')
let dog2 = Dog('yelloDow')
dog1.say()  //redDog: wang!wang!!!
dog1.setStaticAge(20)
dog2.say()  //yelloDow: wang!wang!!!
```

### 类的继承， 方法重载， 子属性，父属性调用
```
let Dog = function(name){
	let child = {
		name: name,
		say(){
			console.log(child.name + ': wang!wang!!!')
		}
	}
	return child
}

let WolfDog = function(name, age) {
	let father = Dog(name)
	let child = {
		name: 'mini' + father.name,
		age: age,
		say(){
			father.say()
			console.log(child.name + ': wooooooo!!!')
		}
	}
	return Object.assign(Dog(name), child)
}

let wolf = WolfDog('blueWolf', 15)
wolf.say() //blueWolf: wang!wang!!!, miniblueWolf: wooooooo!!!
console.log(wolf.name) //miniblueWolf
```
### 不推荐的理由
虽然方法结构的类更加美观，但是现在发现无法有多个构造函数，而属性结构的类可以有多个构造函数
```
//熟悉Objective-C的朋友应该很熟悉这种工厂方法：
Dog.init('redDog')
Dog.initWithMagic('lightning',1000)
```