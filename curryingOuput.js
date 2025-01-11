// Currying is a function which takes one argument and returns a new function with next argument
// Reusability of logic
// Update DOM

// function f(a){
//     return function(b){
//         return function(c){
//             return a * b * c
//         }
//     }
// }
// console.log(f(1)(2)(3))

// function evaluate(operation){
//     return function (a){
//         return function (b){
//             if(operation == "add")return a+b;
//             else if(operation == "subtract") return a - b;
//             else if(operation == "division") return a /b;
//             else if(operation == "multiple") return a *b;
//             else return "Invaild parameter"
//         }
//     }
// }

// const operation = evaluate("subtract");

// console.log(operation(2)(3))

// Infinite currying
// function infinite(a){
//     return function (b){
//         if(b) return infinite(a + b);
//         return a;
//     }
// }

// console.log(infinite(1)(2)(3)(5)(8)(8)())

// Partial Application
// function partial(a){
//     return function(b, c){
//         return a+ b+ c
//     }
// }
// console.log(partial(10)(20, 30))

// create normal function a currying function

// function first(func){
//     return function(...args){
//         console.log(args.length)
//     }
// }
// console.log(first("a")(5)(6)(8))