var fs = require('fs')

var readMe = fs.readFileSync('readMe.txt','utf8')

console.log(readMe);

fs.writeFileSync('writeMe',readMe)

