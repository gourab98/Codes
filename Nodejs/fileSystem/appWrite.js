var fs = require('fs')

fs.writeFile('string1.js','console.log("Done")',function(err){
    console.log("Data Saved")
})