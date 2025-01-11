// const func = (function(a){
//     delete a;
//     return a
// }(5))
// console.log(func);

// Dynamic creation of properties
// let name= "rock";
// let age = 23;

// let obj = {
//     name,
//     [name] : age
// }
// console.log(obj)

// Loop through object
// let obj = {
//     name:"abc",
//     age: 23,
//     sex: "male"
// }
// for ( let key in obj){
//     console.log(obj[key])
// }

// Object print
// let obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// }
// console.log(obj)

// let a = {};
// let b = { key: "b"}
// let c = { key : "c"}

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const test = [..."testify"];
// console.log(test);

// const test = {
//     name: "test",
//     level: 23,
//     health: true
// }
// const result = JSON.stringify(test, ["level", "health"]);
// console.log(result);

// const obj = {
//     radius: 20,
//     diameter(){
//         return this.radius * 2
//     },
//     test : () => {
//         return this.radius * 4
//     }
// }
// console.log(obj.diameter(), obj.test())

// let test = {a : 1};
// Equating memory locations returns false
// console.log({a : 1} == {a : 1});

// let values = {a : 10}
// function test(x = {...values}){
//     console.log((x.a *= 20))
// }
// console.log(test())
// console.log(test(values))
// console.log(test(values))

// Cloning an object
let user = {
    name: "mohan",
    age: 23
}
// let result = Object.assign({}, user);
let result = JSON.parse(JSON.stringify(user));
result.name = "something";
console.log(result)
console.log(user)