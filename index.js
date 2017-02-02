#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let yargs = require('yargs')
let argv = yargs.argv
let pwd = process.cwd()
let str = process.argv

// console.log(`${str[2]} , ${str[3]} , ${str[4]} , ${str[5]}`)
const haveFile = (path,have, unhave)=>{
	fs.exists(path,function(exists){
		if(exists){
			have()
		}
		else {
			unhave()
		}
	})
}

if(str[2] === 'init' && !str[3]) {
	cd(__dirname)
	mkdir(`design`)
	mkdir(`codes`)
	mkdir(`doc`)
}


if (str[2] === 'k' && !str[3]) {
	exec('pkill node')
} else if (str[2] === 'code' && !str[3]) {
	exec(`code ${__dirname}/..`)
} else if (str[2] === 'cd' && !str[3]) {
	console.log(__dirname)
} else if (str[2] === 'ls' && !str[3]) {
	exec(`ls ${__dirname}/design`)
} else if (str[2] === 'doc' && !str[3]) {
	exec(`code ${__dirname}/doc`)
} else if (str[2] === 'design' && !str[3]) {
	exec(`open ${__dirname}/design`)
} else if (str[2] === 'a') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		console.log('库中已有该文件')
		console.log('可使用用ar命令覆盖库中的文件')
	}, function(unhave){
		haveFile(`${pwd}/${str[3]}/package.json`, function(have){
			console.log('is codes')
			cp('-r', str[3], `${__dirname}/codes`)
			rm('-r', `${__dirname}/code/${str[3]}/node_modules`)
		}, function(unhave){
			cp('-r', str[3], `${__dirname}/design`)
		})
		console.log("成功添加${str[3]}到库中")
	})
} else if (str[2] === 'ar') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		console.log('库中已有该文件')
		haveFile(`${pwd}/${str[3]}/package.json`, function(have){
			console.log('is codes')
			cp('-r', str[3], `${__dirname}/codes`)
			rm('-r', `${__dirname}/code/${str[3]}/node_modules`)
		}, function(unhave){
			cp('-r', str[3], `${__dirname}/design`)
		})
		console.log("成功添加${str[3]}到库中, 已覆盖")
	}, function(unhave){
		haveFile(`${pwd}/${str[3]}/package.json`, function(have){
			console.log('is codes')
			cp('-r', str[3], `${__dirname}/codes`)
			rm('-r', `${__dirname}/code/${str[3]}/node_modules`)
		}, function(unhave){
			cp('-r', str[3], `${__dirname}/design`)
		})
		console.log("成功添加${str[3]}到库中")
	})
} else if (str[2] === 'm') {
	mv('-r', str[4], `${__dirname}/design`)
} else if (str[2] === 'mr') {
	cp('-r', str[3], `${__dirname}/design`)
} else if (str[2] === 'g') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		haveFile(`${pwd}/${str[3]}`, function(have){
			console.log(`无法复制出文件, 因为${pwd}已有同名文件${str[3]}`)
			console.log(`可以使用gr,或者gor命令,覆盖${pwd}/${str[3]}文件`)
		}, function(unhave){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
		})
	}, function(unhave){
		console.log('库中没有该文件')
	})
} else if (str[2] === 'gr') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		haveFile(`${pwd}/${str[3]}`, function(have){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
			console.log(`覆盖本地文件${str[3]}`)
		}, function(unhave){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
		})
	}, function(unhave){
		console.log('库中没有该文件')
	})
} else if (str[2] === 'go') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		haveFile(`${pwd}/${str[3]}`, function(have){
			console.log(`无法复制出文件, 因为${pwd}已有同名文件${str[3]}`)
			console.log(`可以使用gr,或者gor命令,覆盖${pwd}/${str[3]}文件`)
		}, function(unhave){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			cd(pwd)
			exec(`open ${str[3]}`)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
		})
	}, function(unhave){
		console.log('库中没有该文件')
	})
} else if (str[2] === 'gor') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		haveFile(`${pwd}/${str[3]}`, function(have){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			cd(pwd)
			exec(`open ${str[3]}`)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
			console.log(`覆盖本地文件${str[3]}`)
		}, function(unhave){
			cd(`${__dirname}/design`)
			cp('-r', str[3], pwd)
			cd(pwd)
			exec(`open ${str[3]}`)
			console.log(`成功从库中提取文件${file}到${pwd}/${str[3]}`)
		})
	}, function(unhave){
		console.log('库中没有该文件')
	})
} else if (str[2] === 'd' && str[3] !== '*') {
	let file = `${__dirname}/design/${str[3]}`
	haveFile(file, function(have){
		cd(`${__dirname}/design`)
		rm('-r', str[3])
		console.log(`已删除 ${file}`)
	}, function(unhave){
		console.log('库中没有该文件')
	})
}


if(str[2] === 'self' && str[3] === 'push') {
	console.log('正在push <self-life> 到github')
	if(!str[4]) {
		cd(__dirname)
		exec('git add .')
		exec('git cmm')
		exec('git pusha')
	} else {
		cd(__dirname)
		exec('git add .')
		exec(`git cm ${str[4]}`)
		exec('git pusha')
	}
}