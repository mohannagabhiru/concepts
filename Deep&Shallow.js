// Deep copy is copying value to some other variable and disconnecting from the parent

// Deep copy
let x = 10;
let y = x;
y = 20;
console.log(x, y);

// Shallow copy
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);

// Make this a deep copy
let arr3 = [1, 2, 3];
let arr4 = [...arr1];
arr4.push(4);
console.log(arr3, arr4);


let obj1 = {name:"abc", age: 23}
let obj2 = Object.assign({sex:"fgt"}, obj1);
obj2.name = "efg";
console.log(obj2, obj1);