var fs = require('fs')

// Synchronous
// fs.mkdirSync('stuff')
//fs.rmdirSync('stuff')


// Asynchronus
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt','utf8', function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data,function(err){
            console.log('Writen')
        });
    })
})