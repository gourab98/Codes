var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream('readMe.txt')

var myWriteStream = fs.createWriteStream('writeMe.txt')

myReadStream.pipe(myWriteStream)