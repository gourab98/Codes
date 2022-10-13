setTimeout(function(){
    console.log("The time has come!!!")
}, 6000)

var time = 0;

var timer = setInterval(function(){
    time+= 1;
    console.log(time + " Seconds have passed")
    if(time>= 5){
        clearInterval(timer)
    }
},1000)
