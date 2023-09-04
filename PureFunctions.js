// Function which are deterministic are pure
// Everything invoked using () are functions

// let test = console.log("hello common");
// console.log(test);

// Impure function
function calculate(length, breadth){
    // As this is from some other library , you cant predict output
    console.log(length, breadth);
    return length * breadth
}

let words=["spray", "destruction"];
// Filter itself is always pure function
let result = words.filter(word => word.length > 5); 
console.log(result)





