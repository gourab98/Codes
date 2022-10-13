const express = require('express')

const app = express();

app.get('/',function(req,res){
    res.send("Hello World.")
})

app.get('/alien',function(req,res){

    const id = req.query.id
    res.send("Hello alien! " + id)
})

app.get('/alien/:id', function(req,res){
    const id = req.params.id
    res.send("Hello Mister "+ id)
})


app.listen(9090, function(req,res){
    console.log('Running...')
})

