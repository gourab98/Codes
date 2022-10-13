function callMe(fun){
    console.log(1)
    fun()
}

function call(){
    console.log(2)
    console.log("Hello, Human!")
}

callMe(call)


