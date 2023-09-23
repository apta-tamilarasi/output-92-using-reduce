// Summing Values in an Object Array Using Array Reduce JavaScript

let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

// Output:92

let o=obj.reduce(function(a,b){
    console.log(a.n+b.n)
    return (a)+(b.n)
},0)

document.write(JSON.stringify(o))
console.log(o)