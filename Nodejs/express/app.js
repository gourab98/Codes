var express = require('express')
var app = express()

app.set('view engine','ejs')

app.get('/', function(req,res){
    //res.send('this is the homepage.')
      res.sendFile(__dirname+'/index.html')
})

app.get('/contact', function(req,res){
    //res.send('This is a contactpage.');
    res.sendFile(__dirname+'/contact.html')
})

// using id:
app.get('/profile/:name',function(req,res){
    //res.send('You are requested to see a profile with the id of '+ req.params.id)
    var data = {age: 24, job: 'Student'}
    res.render('profile',{person: req.params.name, data: data})
})

app.listen(3000);