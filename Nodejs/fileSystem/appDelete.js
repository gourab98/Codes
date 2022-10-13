var fs = require('fs')


fs.unlink('string1.js',function(err){
    console.log("Delete file")
})