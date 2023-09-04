function test(){
    console.log("value is", x);
    // const x = 5;
    // let x;   
    var x;
}
// test()

function que2(){
    var x = 8; 
    var x;
    // var x = 9;
    // Until the value initialized again is higher than the current, it holds same value
    console.log("value is", x);
}
// que2()

function varTest(){
    var x = 1;
    {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
// varTest()

function letTest(){
    let x = 1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
// letTest()

var rate = 10;
function getRate(){
    // ALways the local scope variable gets priority
    if(rate == undefined){
        var rate = 6
        return 6
    }else{
        return 10
    }

    // var test = 10;
    // function test2(){
    //     if(test == undefined){
    //         var test = 20;
    //         console.log(test, "test");
    //     }
    // }
    // test2()
}
console.log("Result is", getRate());

// let x // declaration
// let y = 0 //initialization
