const numbers = [1, 2 , 3, 4 , 50, 50];

// forEach calls a function once for each element
numbers.forEach((item) => console.log(item * 2));

// Map method creates new array by performing given function once on each element without affecting the source array
console.log(numbers.map((item) => console.log(item)));

// flatMap method
const result = numbers.flatMap((item) => item)
console.log(result);

// filter method creates new array with the elements that pass given conditiion
const result = numbers.filter((item) => item > 2);
console.log(result, numbers);

// Reduce method runs a function once on every element to produce single value
const result = numbers.reduce((num = 0, curr) => num + curr);
console.log(result);

// every method checks if all elements passes the given test
const result = numbers.every((item) => item > 2);
console.log(result);

// some method checks if all elements passes the given test
const result = numbers.some((item) => item > 2);
console.log(result);

// IndexOf finds the element in array and returns its postion
const result = numbers.indexOf(50, 5);
console.log(result);

// lastIndexOf returns the last occurence of element in array
const result = numbers.lastIndexOf(50);
console.log(result);

// find returns the element which passes the test first 
const result = numbers.find((item) => item > 2);
console.log(result);

// findIndex returns the element position(index) which passes the given test
const result = numbers.findIndex((item) => item > 2);
console.log(result);

// Includes allpws us to check if an element is present in an array or not 
const result = numbers.includes(50);
console.log(result);
