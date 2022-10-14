var fs = require('fs')

fs.readFile('string.js','utf8',function(err,data){
    console.log(data)
})


var readMe = fs.readFileSync('readMe.txt','utf8')
console.log(readMe)