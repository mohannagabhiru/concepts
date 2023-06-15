let x = 1;

const parentFunction = () => {
    let y = 2;
    console.log(y += 2);
    const child = () => {   
        console.log( y += 50)
    }
    child()
}
parentFunction()


const checkIife = ((num) => {
    return num + 3
})(3)
console.log(checkIife)