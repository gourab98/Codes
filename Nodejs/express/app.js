var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine','ejs')

app.get('/', function(req,res){
    //res.send('this is the homepage.')
      res.sendFile(__dirname+'/index.html')
})

app.get('/contact', function(req,res){
    //res.send('This is a contactpage.');
    //res.sendFile(__dirname+'/contact.html')
    res.render('contact',{qs: req.query})
    //console.log(req.query)
})


app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body)
    res.render('contact-success',{data: req.body})
    //res.render('contact',{qs: req.query})
    //console.log(req.query)
})


// using id:
app.get('/profile/:name',function(req,res){
    //res.send('You are requested to see a profile with the id of '+ req.params.id)
    var data = {age: 24, job: 'Student', hobbies: ['eating','reading','sitting']}
    res.render('profile',{person: req.params.name, data: data})
})

app.listen(3000);