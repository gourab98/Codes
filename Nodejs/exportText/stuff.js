var counter = function(arr){
    return 'There are '+ arr.length +' elements in the array';
}

var adder =  function(a,b){
    return `The sum of two number is ${a+b}`
}

var pi = 3.1416

module.exports ={
    counter: counter,
    adder: adder,
    pi: pi
}