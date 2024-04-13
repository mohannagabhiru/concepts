// 1 function declaration
// function test(num){
//     return num
// }

// 2 Function expression
// const test = function(num){
//     return num*num
// }

// 3 First class function
// function first(num){
//     return num*num
// }

// function second(fn){
//     console.log("Result is " + fn(5))
// }

// second(first);

// 4 IIFE
// (function (num){
//     console.log(num)
// }(28))

// Scope

for(var i =0; i < 5; i++){
    setTimeout(function(){
        console.log(i)
    }, i * 1000)
}



