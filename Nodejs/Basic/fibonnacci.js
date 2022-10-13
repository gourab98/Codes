a = 1
b = 1
temp = 0

function fibo(){
    console.log(a)
    temp = a;
    a = b;
    b = temp + b;
    
    if(a>1000) {return null}
    fibo()
}

fibo()