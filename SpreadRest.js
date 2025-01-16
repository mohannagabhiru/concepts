//  Spread allows an array or object to be expanded into individual elments whereas Rest allows to take variable
//  number of arguments as a single array

//  Rest is often used to handle dynamic number of parameters in function parameter

 // Using rest syntax in a function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

// Copying arrays
const array = [1, 2, 3];
const newArray = [...array];
console.log(newArray); // Output: [1, 2, 3]