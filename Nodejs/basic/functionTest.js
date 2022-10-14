function minusTillZero(a){
    a--;
    console.log(a)
    if(a==0) {return null}
    minusTillZero(a)
}
minusTillZero(9)

function removeLastElement(a){
     var last = a%10;
     a-=last
     a/=10
     console.log(a)
}
removeLastElement(123456)