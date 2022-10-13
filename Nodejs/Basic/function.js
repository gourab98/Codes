function nextInLine( arr, item){

    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,4,4,5,6]

console.log("Before: "+JSON.stringify(testArr))
console.log(nextInLine(testArr,9))
console.log("after: "+JSON.stringify(testArr))

