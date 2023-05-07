const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Form string of array values
console.log(fruits.toString());

// Form string with mentioned character
console.log(fruits.join('%'));

// Gives last element of an array by removing in array
console.log(fruits.pop());

// Gives new array length and Adds new element to array
console.log(fruits.push("something"), fruits);

// Removes first element and shifts all other elements to lower index
console.log(fruits.shift(), fruits);

// Adds new element to the beginning of array and gives updated array length
console.log(fruits.unshift("Lemon"), fruits);

// deletes mentioned index but leaves undefined in the array
delete fruits[1];
console.log(fruits);

// Gives new array by merging two arrays and can add any number of arrays
const newArray = ["a", "b"];
console.log(newArray.concat(fruits));

// Flattens array by reducing dimensionality of array
const arr = [[1,2],[3,4],[5,6]];
console.log(arr.flat())

// Adding new items to an array at specific index and also removing the items to delete
fruits.splice(1, 2);
console.log(fruits);

// Using slice to slice new array without affecting the source array
console.log(fruits.slice(1), fruits );
