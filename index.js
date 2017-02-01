#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let yargs = require('yargs')
let argv = yargs.argv
let pwd = process.cwd()
let str = process.argv

// console.log(`${str[2]} , ${str[3]} , ${str[4]} , ${str[5]}`)


if (str[2] === 'k' && !str[3]) {
	exec('pkill node')
} else if (str[2] === 'code' && !str[3]) {
	exec(`code ${__dirname}/..`)
} else if (str[2] === 'cd' && !str[3]) {
	console.log(__dirname)
	exec(`cwd ${__dirname}`)
} else if (str[2] === 'ls' && !str[3]) {
	exec(`ls ${__dirname}/design`)
} else if (str[2] === 'doc' && !str[3]) {
	exec(`code ${__dirname}/doc`)
} else if (str[2] === 'design' && !str[3]) {
	exec(`open ${__dirname}/design`)
} else if (str[2] === 'a') {

} else if (str[2] === 'g' || str[3] !== 'o') {

} else if (str[2] === 'g' || str[3] === 'o') {

}

