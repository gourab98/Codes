const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("Don't worry.")
})

app.get('/:id',function(req,res){
      const id = req.params.id

    res.status(200)
    res.send("It is working well in this "+ id + " id.")
})

app.get('/gourab',function(req,res){
    res.send("Hello Mr. Saha. How are you?")

})

app.listen(8080,function(req,res){
    console.log("The server is running...")
})