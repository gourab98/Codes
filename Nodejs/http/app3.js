var http = require('http')
var fs = require('fs')



var server = http.createServer(function(req,res){
    console.log('Request was made from: '+ req.url)
    res.writeHead(200,{'Content-Type':'text/plain'})
    var myReadStream = fs.createReadStream('readMe.txt','utf8')
    myReadStream.pipe(res)
})

server.listen(3030,'127.0.0.1')
console.log("Yes, You are online on port 3030 and address 127.0.0.1")