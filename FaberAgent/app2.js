var express = require('express')
const port = 4040
//const { createInvitation } = require('./AgentService')
//var agent = require('./AgentService')
var app = express()

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('index1',{

    })
})


app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  });