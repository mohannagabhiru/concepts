// Generator function allows pause and resume execution at will. It gives complete control to developer
function* test(){
    yield 1;
    yield 2;
    yield 3;
}

const testGenerator = test();

console.log(testGenerator.next().value);
console.log(testGenerator.next().value);
console.log(testGenerator.next().value);