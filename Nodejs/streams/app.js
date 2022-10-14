var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream('readMe.txt')

var myWriteStream = fs.createWriteStream('writeMe.txt')


myReadStream.on('data',function(chunk){
    console.log('new chunk received')
 //   console.log(chunk)
    myWriteStream.write(chunk)
})
