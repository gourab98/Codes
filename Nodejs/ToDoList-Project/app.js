var express = require('express')
var todoController = require('./controllers/todoController')

var app = express();

//set template engine
app.set('view engine','ejs')

//static files
app.use(express.static('./public'))

//fire controllers
todoController(app)

// listen to port
app.listen(3030)
console.log('You are listening to port 3030')